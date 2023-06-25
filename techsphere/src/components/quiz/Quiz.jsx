import React, { useState } from 'react';
import './Quiz.css'; // Import the CSS file

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const token = localStorage.getItem('accessToken');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async () => {
    // Save selected category in local storage
    localStorage.setItem('selectedCategory', selectedCategory);

    try {
      // Make POST request to fetch questions
      const response = await fetch('https://techsphere-er21.onrender.com/interview/getQuestions', {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Generate medium interview level questions for ${localStorage.getItem(
            'selectedCategory'
          )} developer in technical round`,
        }),
      });

      const data = await response.json();
      // Set the fetched questions in state
      setQuestions(data.questions);
      localStorage.setItem("interviewID", data.interviewID);
      setResponses(new Array(data.questions.length).fill(''));
      setFeedback(new Array(data.questions.length).fill({}));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleResponseChange = (questionIndex, event) => {
    const { value } = event.target;
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[questionIndex] = value;
      return updatedResponses;
    });
  };

  const handleResponseSubmit = (questionIndex) => {
    const response = responses[questionIndex];
    const prompt = `Prompt:Q: ${questions[questionIndex]}`;
    const promptAndResponse = `${prompt}? A:${response}[Instructions:analyze the above job interview question-answer and give score on communication and technical knowledge considering grammar mistakes and spelling mistakes. also add a proper expected answer in the next line,follow the following formate strictly as response(communication:score/10; technical knowledge:score/10;expected answer)]`;
    const inter = localStorage.getItem('interviewID');
  
    // Make POST request to submit response
    fetch('https://techsphere-er21.onrender.com/interview/message', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: promptAndResponse,
        interviewID: inter,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response success or error
        console.log(data);

        // Update the feedback state
        setFeedback((prevFeedback) => {
          const updatedFeedback = [...prevFeedback];
          updatedFeedback[questionIndex] = data;
          return updatedFeedback;
        });
      })
      .catch((error) => {
        console.error('Error submitting response:', error);
      });
  };

  return (
    <div className="quiz-container">
      <h1 className="title">Start your Quiz</h1>

      {/* Category section */}
      <div className="category-section">
        <label htmlFor="category" className="category-label">Select Category:</label>
        <select id="category" className="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">-- Select a category --</option>
          <option value="node">Node.js</option>
          <option value="react">React</option>
          <option value="mern">MERN Stack</option>
        </select>
        <button className="submit-button" onClick={handleSubmit}>
          Submit Category
        </button>
      </div>

      {/* Questions section */}
      <div className="questions-section">
        <h2 className="section-title">Questions</h2>
        {questions.length > 0 ? (
          <ul className="question-list">
            {questions.map((question, index) => (
              <li key={index} className="question-item">
                <div className="question">{question}</div>
                <input
                  type="text"
                  className="response-input"
                  value={responses[index]}
                  onChange={(event) => handleResponseChange(index, event)}
                />
                <button className="submit-response-button" onClick={() => handleResponseSubmit(index)}>
                  Submit Response
                </button>
                {feedback[index] && (
                  <div className="feedback">
                    <h3 className="feedback-title">Feedback</h3>
                    {/* <p>Communication Skill: {feedback[index].communicationSkill}</p> */}
                    <p className="feedback-text">Technical Knowledge: {feedback[index].techicalKnowledge}</p>
                    <p className="feedback-text">Answer: {feedback[index].ans}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
