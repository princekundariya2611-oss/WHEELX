import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO SECTION WITH 3D CANVAS ═══════════ */}
      <section className={styles.hero}>
        <canvas id="hero-3d-canvas" className={styles.hero3dcanvas}></canvas>
        <div className="container" style={{ padding: '60px 20px', position: 'relative', zIndex: 2 }}>
          <div className={styles.heroGrid}>
            {/* LEFT: Text & CTA */}
            <div>
              <div className={styles.heroTag}>
                <i className="fa-solid fa-shield-halved"></i> Premier Vehicle Rentals in Morbi
              </div>
              <h1 className={styles.heroTitle}>
                Drive India&apos;s Best Cars With <span>WheelX</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Rent top-condition Maruti, Hyundai, Tata, Mahindra, Toyota cars and Royal Enfield, Honda, TVS bikes
                in Morbi at unbeatable daily rates. Instant pickup, zero hidden fees.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '30px' }}>
                <Link href="/vehicles" className="btn btn-primary">
                  <i className="fa-solid fa-magnifying-glass"></i> Browse All Vehicles
                </Link>
                <a href="https://wa.me/919624497998" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <i className="fa-brands fa-whatsapp"></i> Quick Book (+91 96244 97998)
                </a>
              </div>

              {/* Hero Quick Search */}
              <div className={styles.heroCard}>
                <h3 className="search-widget-title">
                  <i className="fa-solid fa-car-side" style={{ color: '#F59E0B' }}></i> Find Your Ride Instantly
                </h3>
                <form action="/vehicles" method="GET">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Vehicle Type</label>
                      <select name="type" className="form-control">
                        <option value="">All (Cars & Bikes)</option>
                        <option value="CAR">Cars & SUVs</option>
                        <option value="BIKE">Bikes & Scooters</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Sort By</label>
                      <select name="sort" className="form-control">
                        <option value="">Default</option>
                        <option value="price_low">Price: Low to High</option>
                        <option value="price_high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Search Brand or Model</label>
                    <input type="text" name="q" className="form-control"
                      placeholder="e.g. Creta, Thar, Royal Enfield, Swift..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <i className="fa-solid fa-sliders"></i> Search Available Rides
                  </button>
                </form>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <h3>15+</h3>
                  <p>Vehicles in Morbi</p>
                </div>
                <div className={styles.statItem}>
                  <h3>8</h3>
                  <p>Top Indian Brands</p>
                </div>
                <div className={styles.statItem}>
                  <h3>4.9★</h3>
                  <p>Customer Rating</p>
                </div>
                <div className={styles.statItem}>
                  <h3>24/7</h3>
                  <p>Live Support</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Live Car Image Showcase */}
            <div className={styles.heroShowcase}>
              <div className={styles.heroCarPair}>
                <div className={styles.heroCarCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" alt="Mahindra Thar" />
                  <span className={styles.heroCarLabel}>Mahindra Thar 4x4</span>
                  <span className={styles.heroCarPrice}>₹3,800/day</span>
                </div>
                <div className={styles.heroCarCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80" alt="Hyundai Creta" />
                  <span className={styles.heroCarLabel}>Hyundai Creta SX(O)</span>
                  <span className={styles.heroCarPrice}>₹3,200/day</span>
                </div>
              </div>
              <div className={styles.heroCarPair}>
                <div className={styles.heroCarCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80" alt="Royal Enfield Classic 350" />
                  <span className={styles.heroCarLabel}>Royal Enfield Classic 350</span>
                  <span className={styles.heroCarPrice}>₹1,200/day</span>
                </div>
                <div className={styles.heroCarCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1629897048514-3dd7414bc72a?auto=format&fit=crop&w=800&q=80" alt="Toyota Fortuner" />
                  <span className={styles.heroCarLabel}>Toyota Fortuner Legender</span>
                  <span className={styles.heroCarPrice}>₹7,500/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SCROLLING BRAND STRIP ═══════════ */}
      <div className={styles.brandStrip}>
        <div className={styles.brandStripInner}>
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Maruti Suzuki</div>
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Hyundai</div>
          <div className={styles.brandPill}><i className="fa-solid fa-truck-monster"></i> Mahindra</div>
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Toyota</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> Royal Enfield</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> Honda</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> TVS Motors</div>
          {/* Duplicate for seamless loop */}
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Maruti Suzuki</div>
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Hyundai</div>
          <div className={styles.brandPill}><i className="fa-solid fa-truck-monster"></i> Mahindra</div>
          <div className={styles.brandPill}><i className="fa-solid fa-car"></i> Toyota</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> Royal Enfield</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> Honda</div>
          <div className={styles.brandPill}><i className="fa-solid fa-motorcycle"></i> TVS Motors</div>
        </div>
      </div>

      {/* ═══════════ SHOP BY BRAND ═══════════ */}
      <section className={styles.brandSection}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Browse by Company</span>
            <h2 className="section-title">Filter by Your Favourite Brand</h2>
            <p className="section-desc">WheelX offers vehicles from India&apos;s most trusted automotive companies.</p>
          </div>

          <div className={styles.brandCardsGrid}>
            <Link href="/vehicles?q=maruti" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-car-side"></i></div>
              <h4>Maruti Suzuki</h4>
              <span>Swift, Baleno, Ertiga</span>
            </Link>
            <Link href="/vehicles?q=hyundai" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-car"></i></div>
              <h4>Hyundai</h4>
              <span>Creta, i20, Venue</span>
            </Link>
            <Link href="/vehicles?q=mahindra" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-truck-monster"></i></div>
              <h4>Mahindra</h4>
              <span>Thar, Scorpio-N, XUV700</span>
            </Link>
            <Link href="/vehicles?q=toyota" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-car"></i></div>
              <h4>Toyota</h4>
              <span>Fortuner, Innova HyCross</span>
            </Link>
            <Link href="/vehicles?q=royal+enfield" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-motorcycle"></i></div>
              <h4>Royal Enfield</h4>
              <span>Classic 350, Meteor</span>
            </Link>
            <Link href="/vehicles?q=honda" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-motorcycle"></i></div>
              <h4>Honda</h4>
              <span>Activa 6G, Shine 125</span>
            </Link>
            <Link href="/vehicles?q=tvs" className={styles.brandCard}>
              <div className={styles.brandCardIcon}><i className="fa-solid fa-motorcycle"></i></div>
              <h4>TVS Motors</h4>
              <span>Apache RTR 160, Jupiter</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY WHEELX ═══════════ */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">The WheelX Promise</span>
            <h2 className="section-title">Why Morbi Trusts WheelX</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon"><i className="fa-solid fa-tags"></i></div>
              <h4>Guaranteed Best Rates</h4>
              <p>Lowest daily rental prices in Morbi for all Indian brands — no surprise charges.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon"><i className="fa-solid fa-pump-medical"></i></div>
              <h4>100% Sanitized Vehicles</h4>
              <p>Every car and bike is deep cleaned, serviced, and safety inspected before your ride.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
              <h4>24/7 WheelX Helpdesk</h4>
              <p>Call or WhatsApp us anytime at <strong>+91 96244 97998</strong> for instant help on any road.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon"><i className="fa-solid fa-key"></i></div>
              <h4>Easy Self-Drive</h4>
              <p>Seamless document verification, flexible dates, and unlimited km packages in Morbi.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
