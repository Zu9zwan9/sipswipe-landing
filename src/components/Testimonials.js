import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
    return (
        <section id="testimonials" className={`${styles.section} scroll-animate`}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Real Stories, Real Connections</h2>
                    <p>Hear from couples who found love one sip at a time.</p>
                </div>
                <div className={styles.testimonialsGrid}>
                    <div className={styles.testimonial}>
                        <div className={styles.testimonialContent}>
                            "Met my brew mate in 10 minutes at our local craft brewery! We bonded over IPAs and now we're planning our wedding. SipSwipe actually works!"
                        </div>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>S</div>
                            <div className={styles.authorInfo}>
                                <strong>Sarah M.</strong><br />
                                <span>28, Toronto</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.testimonialContent}>
                            "Finally, a dating app that gets it right! No more awkward first dates - we were already having fun at the bar before we even matched."
                        </div>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>M</div>
                            <div className={styles.authorInfo}>
                                <strong>Mike R.</strong><br />
                                <span>32, Chicago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.testimonialContent}>
                            "The Untappd integration is genius! We discovered we both love sour beers and ended up trying five new breweries together."
                        </div>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>E</div>
                            <div className={styles.authorInfo}>
                                <strong>Emma L.</strong><br />
                                <span>26, London</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
