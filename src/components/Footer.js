'use client';

import styles from '../styles/Footer.module.css';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
            const btn = e.target.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Subscribed!';
            btn.style.background = '#10b981';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                setEmail('');
            }, 2000);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>SipSwipe</h3>
                    <p>The dating app that brings people together over great beer and good vibes. Available in USA, Canada, and Europe.</p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}>📱</a>
                        <a href="#" className={styles.socialIcon}>🐦</a>
                        <a href="#" className={styles.socialIcon}>📷</a>
                        <a href="#" className={styles.socialIcon}>🎵</a>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <h3>Legal</h3>
                    <ul className={styles.footerLinks}>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Safety Guidelines</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Stay Updated</h3>
                    <p>Get the latest updates and exclusive features.</p>
                    <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            className={styles.newsletterInput}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2025 SipSwipe. All rights reserved. Made with 💕 for beer lovers everywhere.</p>
            </div>
        </footer>
    );
}
