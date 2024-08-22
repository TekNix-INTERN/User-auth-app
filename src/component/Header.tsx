import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/header.module.css';

const Header = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Giả sử bạn có một hàm để kiểm tra trạng thái đăng nhập
    const checkLoginStatus = async () => {
      const res = await fetch('/api/auth/status');
      const data = await res.json();
      setUser(data.user);
    };

    checkLoginStatus();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        {user ? (
          <>
            <span>Welcome, {user}</span>
            <Link href="/profile">Profile</Link>
            <Link href="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
