import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'SipSwipe - Beer Dating App',
    description: 'SipSwipe is the revolutionary beer dating app connecting singles in bars across USA, Canada & Europe. Find your brew mate tonight with real-time matching!',
    openGraph: {
        title: 'SipSwipe - Find Your Brew Mate Tonight!',
        description: 'The dating app that connects beer lovers in real bars. Sip, swipe, and match with singles near you!',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SipSwipe - Beer Dating App',
        description: 'Meet your perfect match over the perfect brew. Download SipSwipe now!',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
          <title>SipSwipe - Beer Dating App | Connect. Sip. Swipe</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="beer dating app, bar meetup app, SipSwipe, beer lovers, bar dating" />
          <meta name="theme-color" content="#0a0b14" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            {/* Open Graph tags */}
          <meta property="og:title" content="SipSwipe - Beer Dating App | Connect. Sip. Swipe" />
          <meta property="og:description" content="SipSwipe connects singles over beer in bars across USA, Canada & Europe. Download now for real-time bar matching!" />
          <meta property="og:image" content="https://sipswipe.app/images/og-image.png" />
          <meta property="og:url" content="https://sipswipe.app/" />
          <meta property="og:type" content="website" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SipSwipe - Beer Dating App | Connect. Sip. Swipe" />
          <meta name="twitter:description" content="Meet singles at your favorite bar with SipSwipe – the beer dating app." />
          <meta name="twitter:image" content="https://sipswipe.app/images/og-image.png" />
          <meta name="author" content="SipSwipe Team" />
          <link rel="canonical" href="https://sipswipe.app/" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SipSwipe",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "DatingApplication",
  "aggregateRating": {"@type": "AggregateRating","ratingValue": "4.8","ratingCount": "1024"},
  "offers": {"@type": "Offer","price": "0","priceCurrency": "USD"},
  "url": "https://sipswipe.app",
  "image": "https://sipswipe.app/images/logo.png"
}`}} />
        </head>
        <body className={inter.className}>
          {children}
          <script dangerouslySetInnerHTML={{__html: `
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
            });
            // Scroll animations
            const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('in-view'); });
            }, observerOptions);
            document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
          `}} />
        </body>
        </html>
    );
}
