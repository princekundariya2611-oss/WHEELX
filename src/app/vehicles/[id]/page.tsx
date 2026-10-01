import Link from 'next/link';

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  // Mock data for demonstration
  const vehicle = {
    id: params.id,
    brand: 'Hyundai',
    name: 'Creta SX(O)',
    category: 'SUV',
    location: 'Morbi',
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    price_per_day: 3200,
    rating: 4.9,
    description: 'The Hyundai Creta is a premium compact SUV that offers a comfortable ride, spacious interiors, and advanced features. Perfect for family trips and long drives.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    features: ['GPS Navigation', 'Bluetooth Connectivity', 'AC', 'Reverse Camera', 'Sunroof']
  };

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '80vh' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/vehicles" style={{ color: '#4a6580', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Fleet
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
        {/* Left: Image & Details */}
        <div>
          <div style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(14, 165, 233, 0.2)', marginBottom: '30px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>

          <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '22px', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0c3c6e', marginBottom: '16px' }}>Vehicle Description</h3>
            <p style={{ color: '#4a6580', lineHeight: 1.7, marginBottom: '24px' }}>
              {vehicle.description}
            </p>

            <h3 style={{ fontSize: '1.4rem', color: '#0c3c6e', marginBottom: '16px' }}>Key Features</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', color: '#4a6580', padding: 0, listStyle: 'none' }}>
              {vehicle.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-check" style={{ color: '#0ea5e9' }}></i> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Booking Form & Summary */}
        <div>
          <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '22px', border: '1px solid rgba(14, 165, 233, 0.2)', position: 'sticky', top: '100px' }}>
            <div style={{ marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ background: '#E0F2FE', color: '#0284C7', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '8px', display: 'inline-block' }}>{vehicle.category}</span>
                  <h1 style={{ fontSize: '2rem', color: '#0c3c6e', margin: '0 0 8px 0' }}>{vehicle.brand} {vehicle.name}</h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#4a6580', fontSize: '0.9rem' }}>
                    <span><i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i> {vehicle.rating} Rating</span>
                    <span><i className="fa-solid fa-location-dot" style={{ color: '#0ea5e9' }}></i> {vehicle.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center', background: '#F8FAFC', padding: '16px 10px', borderRadius: '12px' }}>
                <i className="fa-solid fa-gas-pump" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.8rem', color: '#4a6580' }}>Fuel</div>
                <div style={{ fontWeight: 700, color: '#0c3c6e' }}>{vehicle.fuel_type}</div>
              </div>
              <div style={{ textAlign: 'center', background: '#F8FAFC', padding: '16px 10px', borderRadius: '12px' }}>
                <i className="fa-solid fa-gear" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.8rem', color: '#4a6580' }}>Trans.</div>
                <div style={{ fontWeight: 700, color: '#0c3c6e' }}>{vehicle.transmission}</div>
              </div>
              <div style={{ textAlign: 'center', background: '#F8FAFC', padding: '16px 10px', borderRadius: '12px' }}>
                <i className="fa-solid fa-users" style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.8rem', color: '#4a6580' }}>Seats</div>
                <div style={{ fontWeight: 700, color: '#0c3c6e' }}>{vehicle.seats}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '24px' }}>
              <div>
                <div style={{ color: '#4a6580', fontSize: '0.9rem', marginBottom: '4px' }}>Rental Price</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0ea5e9' }}>₹{vehicle.price_per_day}<span style={{ fontSize: '1rem', color: '#4a6580', fontWeight: 500 }}>/day</span></div>
              </div>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4a6580', marginBottom: '6px' }}>Pickup Date</label>
                  <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#4a6580', marginBottom: '6px' }}>Dropoff Date</label>
                  <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                </div>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }}>
                Proceed to Book
              </button>
              <a href="https://wa.me/919624497998" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', textAlign: 'center' }}>
                <i className="fa-brands fa-whatsapp"></i> Book via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
