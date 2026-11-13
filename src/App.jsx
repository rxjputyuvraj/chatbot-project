import { useState, useRef, useEffect } from "react";
import { mentalHealthAssistant } from "./utils/mentalHealthAssistant";
import robotprofile from "./assets/robot.png";
import userprofile from "./assets/149071.png";
import "./App.css";

function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSendMessage() {
    if (!inputText.trim()) return;

    const userMessage = {
      message: inputText.trim(),
      sender: "user",
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);

    // Simulate thinking delay for more natural conversation
    setTimeout(() => {
      const response = mentalHealthAssistant.getResponse(inputText.trim());
      const assistantMessage = {
        message: response,
        sender: "assistant",
        id: crypto.randomUUID(),
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setInputText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="chat-input-container">
      <input
        ref={inputRef}
        className="chat-input"
        placeholder="Share what's on your mind... I'm here to listen"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button
        className="send-button"
        onClick={handleSendMessage}
        disabled={!inputText.trim()}
        aria-label="Send message"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-assistant"
      }
    >
      {sender === "assistant" && (
        <img
          src={robotprofile}
          className="assistant-image"
          alt="Mental health assistant"
        />
      )}
      <div
        className={`chat-message-text ${
          sender === "user" ? "user-message" : "assistant-message"
        }`}
      >
        {message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < message.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      {sender === "user" && (
        <img src={userprofile} className="user-image" alt="You" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  if (chatMessages.length === 0) {
    return (
      <div className="chat-messages-container empty-state">
        <div className="welcome-message">
          <h2>Welcome to Your Mental Health Assistant</h2>
          <p>
            I'm here to provide a safe, non-judgmental space for you to express
            your thoughts and feelings.
          </p>
          <p>
            You can share anything that's on your mind, and I'll listen with
            empathy and support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}

function QuickActions({ onQuickAction }) {
  const quickActions = [
    { text: "I'm feeling anxious", emoji: "😰" },
    { text: "I'm feeling sad", emoji: "😢" },
    { text: "I'm feeling stressed", emoji: "😓" },
    { text: "I need coping strategies", emoji: "🧘" },
  ];

  return (
    <div className="quick-actions-container">
      <p className="quick-actions-label">Quick actions:</p>
      <div className="quick-actions-buttons">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="quick-action-button"
            onClick={() => onQuickAction(action.text)}
          >
            <span className="quick-action-emoji">{action.emoji}</span>
            <span className="quick-action-text">{action.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Resources() {
  const resources = [
    {
      name: "988 Suicide & Crisis Lifeline",
      number: "988",
      description: "Free, confidential support 24/7",
    },
    {
      name: "Crisis Text Line",
      text: "Text HOME to 741741",
      description: "Free crisis support via text",
    },
    {
      name: "National Alliance on Mental Illness",
      link: "https://www.nami.org",
      description: "Mental health resources and support",
    },
  ];

  return (
    <div className="resources-container">
      <h3>Mental Health Resources</h3>
      <div className="resources-list">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <strong>{resource.name}</strong>
            {resource.number && (
              <p className="resource-contact">Call: {resource.number}</p>
            )}
            {resource.text && (
              <p className="resource-contact">{resource.text}</p>
            )}
            {resource.link && (
              <p className="resource-contact">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </p>
            )}
            <p className="resource-description">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="disclaimer">
      <p>
        <strong>Important:</strong> This assistant provides supportive
        conversation and general information, but it is not a substitute for
        professional mental health care. If you're experiencing a mental health
        crisis or emergency, please contact a crisis helpline or emergency
        services immediately.
      </p>
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        "Hello! I'm your mental health assistant. I'm here to listen, support, and provide a safe space for you to share your thoughts and feelings. How are you doing today?",
      sender: "assistant",
      id: "welcome-1",
      timestamp: new Date(),
    },
  ]);
  const [showResources, setShowResources] = useState(false);

  function handleQuickAction(actionText) {
    const userMessage = {
      message: actionText,
      sender: "user",
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const response = mentalHealthAssistant.getResponse(actionText);
      const assistantMessage = {
        message: response,
        sender: "assistant",
        id: crypto.randomUUID(),
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mental Health Assistant</h1>
        <p className="header-subtitle">
          A safe space for support and understanding
        </p>
      </header>

      <ChatMessages chatMessages={chatMessages} />

      {chatMessages.length === 1 && (
        <QuickActions onQuickAction={handleQuickAction} />
      )}

      <div className="footer-actions">
        <button
          className="resources-toggle-button"
          onClick={() => setShowResources(!showResources)}
        >
          {showResources ? "Hide" : "Show"} Resources
        </button>
      </div>

      {showResources && <Resources />}

      <ChatInput setChatMessages={setChatMessages} />

      <Disclaimer />
    </div>
  );
}

export default App;
