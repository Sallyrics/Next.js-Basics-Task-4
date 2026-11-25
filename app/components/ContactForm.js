'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
    setIsError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-secret-token',
        },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (res.status === 401) {
        setIsError(true);
        setResponseMsg(data.error || 'Unauthorized: Invalid or missing token.');
      } else if (!res.ok) {
        setIsError(true);
        setResponseMsg(data.error || 'Something went wrong.');
      } else {
        setIsError(false);
        setResponseMsg(data.message);
        setName('');
        setMessage('');
      }
    } catch (error) {
      setIsError(true);
      setResponseMsg('Failed to connect to the server.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', color: '#000' }}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', color: '#000' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.6rem', backgroundColor: '#1e3a8a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>

      {responseMsg && (
        <p style={{ marginTop: '1rem', color: isError ? 'red' : 'green', fontWeight: 'bold' }}>
          {responseMsg}
        </p>
      )}
    </div>
  );
}
