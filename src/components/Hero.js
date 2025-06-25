'use client';

import styles from '../styles/Hero.module.css';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef(null);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroRef.current.style.transform = `translateY(${rate}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing effect
    useEffect(() => {
        const heroEl = heroRef.current;
        if (heroEl) {
            const title = heroEl.querySelector('h1');
            if (title) {
                const text = title.textContent;
                title.textContent = '';
                setTimeout(() => {
                    let i = 0;
                    function type() {
                        if (i < text.length) {
                            title.textContent += text.charAt(i);
                            i++;
                            setTimeout(type, 50);
                        }
                    }
                    type();
                }, 1000);
            }
        }
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1>Sip, Swipe, and Match at Your Favorite Bar!</h1>
                    <p>The revolutionary dating app that connects beer lovers in real bars across USA, Canada & Europe. Find your perfect brew mate tonight!</p>
                    <div className={styles.storeButtons}>
                        <a href="https://apps.apple.com/app/sipswipe/id123456789" target="_blank" rel="noopener noreferrer">
                            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83" alt="Download on the App Store" className={styles.storeBadge} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.sipswipe.app" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className={styles.storeBadge} />
                        </a>
                    </div>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.phoneMockup}>
                        <div className={styles.phoneScreen}>🍺💕</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
