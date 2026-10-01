import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <div className="section-header">
        <span className="section-subtitle">About Us</span>
        <h1 className="section-title">The WheelX Story</h1>
        <p className="section-desc">Morbi&apos;s most trusted and reliable vehicle rental service.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(12, 60, 110, 0.08)' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#0c3c6e', marginBottom: '16px' }}>Our Mission</h3>
          <p style={{ color: '#4a6580', lineHeight: 1.8 }}>
            At WheelX, we believe that mobility should be accessible, transparent, and premium. 
            Started in Morbi, Gujarat, our mission is to provide top-condition vehicles for business travelers, 
            tourists, and locals with zero hidden fees and 100% transparency.
          </p>
        </div>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(12, 60, 110, 0.08)' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#0c3c6e', marginBottom: '16px' }}>Why Choose Us?</h3>
          <ul style={{ color: '#4a6580', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Guaranteed best rates in Morbi</li>
            <li style={{ marginBottom: '10px' }}>Fully sanitized and serviced fleet</li>
            <li style={{ marginBottom: '10px' }}>24/7 dedicated customer support</li>
            <li style={{ marginBottom: '10px' }}>Easy online booking and quick KYC</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
