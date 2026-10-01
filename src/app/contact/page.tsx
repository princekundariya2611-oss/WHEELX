import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <div className="section-header">
        <span className="section-subtitle">Get in Touch</span>
        <h1 className="section-title">Contact WheelX Helpdesk</h1>
        <p className="section-desc">We are available 24/7 to assist you with your bookings and queries.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', marginTop: '60px' }}>
        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(12, 60, 110, 0.08)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#0c3c6e', marginBottom: '24px' }}>Contact Information</h3>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <i className="fa-solid fa-location-dot" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginTop: '4px' }}></i>
            <div>
              <h4 style={{ color: '#0c3c6e', marginBottom: '4px' }}>Office Address</h4>
              <p style={{ color: '#4a6580' }}>Luxuria Business Park, Morbi, Gujarat, India - 363641</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <i className="fa-solid fa-phone" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginTop: '4px' }}></i>
            <div>
              <h4 style={{ color: '#0c3c6e', marginBottom: '4px' }}>Phone Number</h4>
              <p style={{ color: '#4a6580' }}>+91 96244 97998</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <i className="fa-solid fa-envelope" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginTop: '4px' }}></i>
            <div>
              <h4 style={{ color: '#0c3c6e', marginBottom: '4px' }}>Email Address</h4>
              <p style={{ color: '#4a6580' }}>info@wheelxmorbi.com</p>
            </div>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(12, 60, 110, 0.08)' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#0c3c6e', marginBottom: '24px' }}>Send us a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none' }} />
              <input type="email" placeholder="Email Address" style={{ padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none' }} />
            </div>
            <input type="text" placeholder="Subject" style={{ padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none' }} />
            <textarea placeholder="Your Message" rows={5} style={{ padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none', resize: 'none' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ width: 'fit-content' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
