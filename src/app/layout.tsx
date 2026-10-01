import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'WheelX | Premier Vehicle Rentals in Morbi',
  description: 'WheelX - Best self-drive cars, luxury vehicles, and bike rentals in Morbi, Gujarat. Contact +91 96244 97998 for instant booking.',
  keywords: 'WheelX, Car Rental Morbi, Rent Bike Morbi, Self Drive Cars Morbi, Rental Vehicles Morbi'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts & FontAwesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {/* Top Announcement Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-info">
              <span><i className="fa-solid fa-location-dot"></i> Morbi, Gujarat</span>
              <span><i className="fa-solid fa-phone"></i> Call/WhatsApp: +91 96244 97998</span>
              <span><i className="fa-solid fa-clock"></i> 24/7 Rental Support</span>
            </div>
            <div className="top-socials">
              <a href="https://wa.me/919624497998" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>
                <i className="fa-brands fa-whatsapp"></i> Quick Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <header className="header">
          <div className="container header-container">
            <Link href="/" className="logo">
              Wheel<span>X</span>
              <span className="logo-badge">Morbi</span>
            </Link>

            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/vehicles">Our Fleet</Link></li>
              <li><Link href="/about">About WheelX</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>

            <div className="header-actions">
              <a href="tel:9624497998" className="btn btn-secondary btn-sm mobile-hidden">
                <i className="fa-solid fa-phone"></i> 96244 97998
              </a>
              <Link href="/vehicles" className="btn btn-primary btn-sm mobile-hidden">
                <i className="fa-solid fa-car"></i> Rent Now
              </Link>
              <button className="mobile-menu-btn" id="mobileMenuBtn">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main>
          {children}
        </main>

        {/* Global Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/" className="logo">Wheel<span>X</span></Link>
                <p>Morbi&apos;s trusted vehicle rental service. Providing premium self-drive cars, luxury sedans, SUVs, and bikes with transparent pricing and 24/7 assistance.</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                  <a href="https://wa.me/919624497998" className="btn btn-whatsapp btn-sm"><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
                </div>
              </div>

              <div>
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/vehicles">Explore Fleet</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-title">Categories</h4>
                <ul className="footer-links">
                  <li><Link href="/vehicles?type=CAR">Cars & SUVs</Link></li>
                  <li><Link href="/vehicles?type=BIKE">Bikes & Scooters</Link></li>
                  <li><Link href="/vehicles?sort=price_low">Budget Rentals</Link></li>
                  <li><Link href="/vehicles?sort=rating">Top Rated Fleet</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-title">Contact WheelX</h4>
                <ul className="footer-links" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}><i className="fa-solid fa-location-dot" style={{ color: '#7DD3FC', marginTop: '4px' }}></i> Morbi, Gujarat, India</li>
                  <li style={{ display: 'flex', gap: '10px' }}><i className="fa-solid fa-phone" style={{ color: '#7DD3FC', marginTop: '4px' }}></i> <a href="tel:9624497998" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>+91 96244 97998</a></li>
                  <li style={{ display: 'flex', gap: '10px' }}><i className="fa-solid fa-envelope" style={{ color: '#7DD3FC', marginTop: '4px' }}></i> info@wheelxmorbi.com</li>
                  <li style={{ display: 'flex', gap: '10px' }}><i className="fa-solid fa-clock" style={{ color: '#7DD3FC', marginTop: '4px' }}></i> Mon - Sun: 7:00 AM - 10:00 PM</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} WheelX Vehicle Rentals Morbi. Founded & Operated by <strong>Prince Patel</strong> | Luxuria Business Park, Morbi, Gujarat.</p>
            </div>
          </div>
        </footer>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
