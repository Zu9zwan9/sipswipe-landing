'use client';

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar" className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>SipSwipe</div>
                <ul className={styles.navLinks}>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#features">Features</Link></li>
                    <li><Link href="#testimonials">Reviews</Link></li>
                </ul>
            </div>
        </nav>
    );
}
