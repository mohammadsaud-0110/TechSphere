import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

export const RecordAudio = () => {
  const [textToCopy, setTextToCopy] = useState();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          {/* <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button> */}
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button class="rounded-none ..." onClick={startListening}>
            Start Listening
          </button>
          <button
            class="rounded-none ..."
            onClick={SpeechRecognition.stopListening}
          >
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};
