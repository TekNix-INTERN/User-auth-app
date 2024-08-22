
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import styles from '@/styles/homepage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Next.js App</h1>
        <p className={styles.subtitle}>Building amazing web applications with Next.js</p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Get Started</h2>
            <p className={styles.cardContent}>Learn how to get started with Next.js.</p>
            <a href="/docs" className={styles.cardLink}>Read the docs</a>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Explore the features</h2>
            <p className={styles.cardContent}>Discover the features of Next.js.</p>
            <a href="/features" className={styles.cardLink}>Explore features</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
