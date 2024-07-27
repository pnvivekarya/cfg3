import React, { useState, useRef } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendClick = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "text", content: input }]);
      setInput("");
    }
  };

  const handleImageAdd = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMessages([...messages, { type: "image", content: reader.result }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRecordClick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.ondataavailable = (event) => {
      setAudioChunks((prev) => [...prev, event.data]);
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setMessages([...messages, { type: "audio", content: audioUrl }]);
      setAudioChunks([]);
    };
    mediaRecorder.start();
    setIsRecording(true);
    setIsPaused(false);
  };

  const handlePauseClick = () => {
    if (window.confirm("Do you really want to pause?")) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleResumeClick = () => {
    mediaRecorderRef.current.resume();
    setIsPaused(false);
  };

  const handleStopClick = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setIsPaused(false);
  };

  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div className="chat-window" style={{ flex: 1, overflowY: "auto" }}>
        {messages.map((message, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            {message.type === "text" && <div>{message.content}</div>}
            {message.type === "image" && (
              <img
                src={message.content}
                alt="User Upload"
                style={{ maxWidth: "100%" }}
              />
            )}
            {message.type === "audio" && (
              <audio controls>
                <source src={message.content} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
      <div className="input-container" style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message"
          style={{ flex: 1, padding: "10px" }}
        />
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageAdd}
            style={{ display: "none" }}
          />
          <button>
            <img
              src="record.png"
              alt="Add"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </label>
        {isRecording ? (
          <>
            {isPaused ? (
              <button onClick={handleResumeClick}>Resume</button>
            ) : (
              <button onClick={handlePauseClick}>Pause</button>
            )}
            <button onClick={handleStopClick}>Stop</button>
          </>
        ) : (
          <button onClick={handleRecordClick} className="record"></button>
        )}
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}
