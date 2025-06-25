import styles from '../styles/Features.module.css';

export default function Features() {
    return (
        <section id="features" className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Features That Make Magic Happen</h2>
                    <p>Everything you need to turn a casual drink into something extraordinary.</p>
                </div>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <span className={styles.featureIcon}>📍</span>
                        <h3>Real-Time Bar Matching</h3>
                        <p>Instantly connect with singles at your current bar location. No more wondering if your match is actually nearby.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <span className={styles.featureIcon}>💬</span>
                        <h3>Smart Icebreaker Chat</h3>
                        <p>Break the ice with AI-powered conversation starters based on shared interests and the bar atmosphere.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <span className={styles.featureIcon}>🍻</span>
                        <h3>Beer & Bar Integration</h3>
                        <p>Connect with Untappd and OpenTable for drink recommendations and instant table reservations for dates.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <span className={styles.featureIcon}>🎬</span>
                        <h3>TikTok & X Sharing</h3>
                        <p>Share your best date moments and help SipSwipe go viral while building an authentic community.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
