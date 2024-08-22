/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import styles from '@/styles/register.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = '/login';
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
        <a href="/login" className={styles.link}>Already have an account? Login</a>
      </div>
    </div>
  );
};

export default Register;
