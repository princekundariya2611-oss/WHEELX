import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: '#F0F7FF' }}>
      <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(12, 60, 110, 0.08)', width: '100%', maxWidth: '450px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0c3c6e', marginBottom: '8px' }}>Welcome Back</h2>
          <p style={{ color: '#4a6580' }}>Login to manage your bookings</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#4a6580', fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
            <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#4a6580', fontWeight: 600, fontSize: '0.9rem' }}>Password</label>
            <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4a6580' }}>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="#" style={{ color: '#0ea5e9', fontWeight: 600 }}>Forgot Password?</Link>
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Login Securely</button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: '#4a6580' }}>
          Don&apos;t have an account? <Link href="/register" style={{ color: '#0ea5e9', fontWeight: 600 }}>Create an account</Link>
        </div>
      </div>
    </div>
  );
}
