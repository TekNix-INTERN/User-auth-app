/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import Style from '@/styles/login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = '/';
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <h2 className={Style.heading}>Login</h2>
        <form onSubmit={handleLogin} className={Style.form}>
          <div className={Style.inputGroup}>
            <label htmlFor="email" className={Style.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={Style.input}
            />
          </div>
          <div className={Style.inputGroup}>
            <label htmlFor="password" className={Style.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={Style.input}
            />
          </div>
          <button
            type="submit"
            className={Style.button}
          >
            Login
          </button>
          <div className={Style.linkContainer}>
            <a href="/register" className={Style.link}> Dont have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
