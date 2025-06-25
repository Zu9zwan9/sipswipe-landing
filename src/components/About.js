import styles from '../styles/About.module.css';

export default function About() {
    return (
        <section id="about" className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Find Your Brew Mate Tonight!</h2>
                    <p>SipSwipe revolutionizes dating by connecting singles in the most natural social setting - your favorite local bar.</p>
                </div>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutContent}>
                        <p>Tired of endless online conversations that go nowhere? SipSwipe brings dating back to real life by connecting you with compatible singles who are actually at the same bar as you, right now. Whether you're grabbing an after-work drink or out for the weekend, discover someone special over your favorite brew. Our unique algorithm matches you based on location, preferences, and that perfect moment when you're both ready to meet someone new.</p>
                    </div>
                    <div className={styles.aboutIcons}>
                        <div className={styles.iconItem}>
                            <span className={styles.icon}>🍺</span>
                            <strong>Beer Love</strong>
                        </div>
                        <div className={styles.iconItem}>
                            <span className={styles.icon}>💖</span>
                            <strong>Real Matches</strong>
                        </div>
                        <div className={styles.iconItem}>
                            <span className={styles.icon}>👆</span>
                            <strong>Smart Swipe</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
