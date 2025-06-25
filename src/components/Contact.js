'use client';

import styles from '../styles/Contact.module.css';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    };

    return (
        <section className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Get in Touch</h2>
                    <p>Questions? Feedback? We'd love to hear from you!</p>
                </div>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} style={{ width: '100%' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
