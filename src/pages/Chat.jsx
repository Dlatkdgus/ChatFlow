import React, { useState } from 'react';
import OpenAI from 'openai';
import styles from '../styles/Chat.module.css';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요!", sender: "bot" },
    { id: 2, text: "어떻게 도와드릴까요?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: '너는 내 친구로 활동해야해' },
          { role: 'system', content: '너는 한국어만 써야해' },
          { role: 'user', content: newMessage },
        ],
      });

      const aiMessage = {
        id: messages.length + 2,
        text: completion.choices[0].message.content,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.chat_window}>
      <div className={styles.messages}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${
              message.sender === "user" ? styles.sent : ""
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className={styles.input_container} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="메시지를 입력하세요..."
          value={newMessage}
          onChange={handleChange}
        />
        <button type="submit" className={styles.send_button}>
          전송
        </button>
      </form>
    </div>
  );
}

export default Chat;