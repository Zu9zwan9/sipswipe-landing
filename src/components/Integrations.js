import styles from '../styles/Integrations.module.css';

export default function Integrations() {
    return (
        <section id="integrations" className={`${styles.integrations} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Powered by Your Favorite Apps</h2>
                    <p>Discover a richer dating experience with SipSwipe’s seamless integrations. Link your Untappd to explore new brews together, reserve a cozy spot via OpenTable, and set the perfect mood with Spotify playlists. Share your moments on TikTok and X to spark viral buzz. Everything you need for the ultimate brew-fueled connection, all in one place.</p>
                </div>
                <div className={styles.integrationCarousel}>
                    <img src="/images/untappd.png" alt="Untappd logo" className={styles.integrationLogo} />
                    <img src="/images/opentable.png" alt="OpenTable logo" className={styles.integrationLogo} />
                    <img src="/images/spotify.png" alt="Spotify logo" className={styles.integrationLogo} />
                    <img src="/images/google-maps.png" alt="Google Maps logo" className={styles.integrationLogo} />
                    <img src="/images/tiktok.png" alt="TikTok logo" className={styles.integrationLogo} />
                </div>
            </div>
        </section>
    );
}
