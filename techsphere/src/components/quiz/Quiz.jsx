import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaStop, FaPlay, FaTrash, FaVideo } from 'react-icons/fa';
// import { CSSTrsition } from 'react-transition-group';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoRecording, setVideoRecording] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [videoTabActive, setVideoTabActive] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    let countdownTimer;

    if (timer > 0) {
      countdownTimer = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      handleNextQuestion();
    }

    return () => clearTimeout(countdownTimer);
  }, [timer]);

  useEffect(() => {
    setAllQuestionsAnswered(
      Object.keys(submittedAnswers).length === questions.length
    );
  }, [submittedAnswers, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:8000/questions');
      const data = await response.json();

      const shuffledQuestions = shuffleArray(data);

      const updatedQuestions = shuffledQuestions.map((question) => ({
        ...question,
        response: null,
      }));

      setQuestions(updatedQuestions || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const streamRef = useRef(null); // Store the media stream reference

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        setMediaRecorder(mediaRecorder);
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        console.log('Recording started...');
      })
      .catch((error) => {
        console.error('Error starting recording:', error);
      });
  };
  
  const handleStopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();

      // Handle the recorded video data
      mediaRecorder.ondataavailable = async (event) => {
        const videoBlob = event.data;
        const videoURL = URL.createObjectURL(videoBlob);
        setVideoRecording(videoURL);
        const response = await fetch('http://localhost:8000/upload-video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoURL }), // Send the video URL to the backend
        });
        // Handle the response from the backend
      };

      console.log('Recording stopped...');
    }
  };

  const handlePlayRecording = () => {
    const videoURL = videoRecording;
    const video = videoRef.current;
  
    video.src = videoURL;
    setIsPlaying(true);
  
    video.addEventListener('error', () => {
      console.error('Error playing video');
      setIsPlaying(false);
    });
  
    video.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  
    video.play()
      .catch((error) => {
        console.error('Error playing video:', error);
        setIsPlaying(false);
      });
  };
  

  const handleNextQuestion = () => {
    if (videoRecording) {
      setSubmittedAnswers((prevSubmittedAnswers) => ({
        ...prevSubmittedAnswers,
        [currentQuestionIndex]: videoRecording,
      }));
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setVideoRecording(null);
      setMediaRecorder(null);
      setTimer(60);
      setVideoTabActive(false);
    } else {
      calculateMarks();
      setShowResults(true);
    }
  };

  const handleResetQuestion = () => {
    setVideoRecording(null);
    setMediaRecorder(null);
    setTimer(60);
  };

  const handleQuizSubmit = () => {
    if (videoRecording) {
      setSubmittedAnswers((prevSubmittedAnswers) => ({
        ...prevSubmittedAnswers,
        [currentQuestionIndex]: videoRecording,
      }));
    }

    sendQuizAnswersToBackend(submittedAnswers);
    calculateMarks();
    setShowResults(true);
  };

  const sendQuizAnswersToBackend = async (answers) => {
    try {
      const updatedQuestions = questions.map((question, index) => ({
        ...question,
        response: answers[index],
      }));

      const response = await fetch('http://localhost:8000/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuestions),
      });

      // Handle the response from the backend if needed
      console.log('Quiz answers sent to backend:', updatedQuestions);
    } catch (error) {
      console.error('Error sending quiz answers:', error);
    }
  };

  const calculateMarks = () => {
    let totalMarks = 0;
    questions.forEach((question, index) => {
      const submittedAnswer = submittedAnswers[index];
      if (
        submittedAnswer &&
        submittedAnswer.answer === question.answer &&
        submittedAnswer.timer === 0
      ) {
        totalMarks++;
      }
    });
    setMarks(totalMarks);
  };

  const renderQuestion = () => {
    if (loading) {
      return <div className="loading">Loading questions...</div>;
    }

    if (questions.length === 0) {
      return <div className="loading">No questions available.</div>;
    }

    if (showResults) {
      return (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <p>Marks obtained: {marks}</p>
          <button className="submit-btn" onClick={handleQuizSubmit}>
            Submit Quiz
          </button>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="question">
        <h2>Question {currentQuestion.id}</h2>
        <p>{currentQuestion.question}</p>
        <div className="recording-section">
          <button
            className={`record-btn ${mediaRecorder !== null ? 'disabled' : ''}`}
            onClick={handleStartRecording}
            disabled={mediaRecorder !== null}
          >
            <FaMicrophone />
            Record
          </button>
          <button
            className={`record-btn ${mediaRecorder === null ? 'disabled' : ''}`}
            onClick={handleStopRecording}
            disabled={mediaRecorder === null}
          >
            <FaStop />
            Stop
          </button>
          {videoRecording && (
            <div className="video-preview">
              <video
                ref={videoRef}
                className={`video-player ${isPlaying ? 'playing' : ''}`}
                controls
              />
              <div className="video-controls">
                <button
                  className="play-btn"
                  onClick={handlePlayRecording}
                  disabled={isPlaying}
                >
                  <FaPlay />
                </button>
                <button className="delete-btn" onClick={handleResetQuestion}>
                  <FaTrash />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="timer">Timer: {timer}</div>
        <div className="buttons">
          <button className="next-btn" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      <div className="quiz">
        <div className="questions">{renderQuestion()}</div>
      </div>
    </div>
  );
};

export default Quiz;
