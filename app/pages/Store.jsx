'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const storeImg = '/assets/Transparent-heal-conscious-image.png';
const img1     = '/assets/careox-mental-health-guide-program.png';
const img2     = '/assets/Careox-Integrated-Printable-Page-Heal-Conscious-1536x1113.png';
const img3     = '/assets/careox-journal-front.png';

const StoreProducts = [
  {
    id: 1,
    slug: 'careox-4-week-mental-health-fortification-program',
    image: img1,
    title: 'Careox | 4 Week Mental Health Fortification Program',
    price: 199.0,
    rating: 4.5,
    reviews: 12,
    popularity: 3,
    latest: new Date('2024-03-01'),
    description: 'A comprehensive 4-week mental health fortification program designed to build resilience and well-being.',
  },
  {
    id: 2,
    slug: 'careox-program-printable-calendar',
    image: img2,
    title: 'Careox Program Printable Calendar',
    price: 15.0,
    rating: 4.2,
    reviews: 8,
    popularity: 2,
    latest: new Date('2024-05-01'),
    description: 'A beautiful printable calendar to track your Careox program journey day by day.',
  },
  {
    id: 3,
    slug: 'journal-mental-healthcare-leather-journal',
    image: img3,
    title: 'Vintage Leather Wellness Journal | 380 Pages',
    price: 99.0,
    rating: 4.8,
    reviews: 25,
    popularity: 1,
    latest: new Date('2024-02-01'),
    description: 'A premium 380-page vintage leather wellness journal for your daily reflections and mental health notes.',
  },
];

const sortOptions = [
  { label: 'Default sorting',            value: 'default'    },
  { label: 'Sort by popularity',         value: 'popularity' },
  { label: 'Sort by average rating',     value: 'rating'     },
  { label: 'Sort by latest',             value: 'latest'     },
  { label: 'Sort by price: low to high', value: 'price_asc'  },
  { label: 'Sort by price: high to low', value: 'price_desc' },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
      <span style={{ fontSize: 11, color: '#888', marginLeft: 4 }}>({rating})</span>
    </div>
  );
}

function ProductCard({ product, listMode = false }) {
  const router  = useRouter();
  const [hovered, setHovered] = useState(false);
  const [wished,  setWished]  = useState(false);
  const [added,   setAdded]   = useState(false);

  if (listMode) {
    return (
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        style={{
          display: 'flex', gap: 20, alignItems: 'center',
          borderBottom: '1px solid #f0f0f0', paddingBottom: 24,
          cursor: 'pointer', borderRadius: 8, padding: 12,
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#fafafa')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <img src={product.image} alt={product.title}
          style={{ width: 112, height: 112, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#222', margin: 0 }}>{product.title}</p>
          <StarRating rating={product.rating} />
          <p style={{ fontSize: 16, fontWeight: 900, color: '#111', margin: 0 }}>${product.price.toFixed(2)}</p>
          <p style={{ fontSize: 12, color: '#777', margin: 0, lineHeight: 1.5,
            overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      <div
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 10 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={product.image} alt={product.title}
          style={{
            width: '100%', height: 240, objectFit: 'cover',
            transition: 'transform 0.3s',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }} />

        <div style={{
          position: 'absolute', top: 12, right: 12,
          display: 'flex', flexDirection: 'column', gap: 8,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
        }}>
          <button
            onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
            title="Add to wishlist"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#fff', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24"
              fill={wished ? '#e24b4a' : 'none'}
              stroke={wished ? '#e24b4a' : '#555'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); router.push(`/product/${product.slug}`); }}
            title="Quick view"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#fff', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            title="Share"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#fff', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        </div>
      </div>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ fontSize: 14, color: '#444', margin: 0, lineHeight: 1.4,
          transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
        >
          {product.title}
        </p>
        <StarRating rating={product.rating} />
        <p style={{ fontSize: 16, fontWeight: 900, color: '#111', margin: 0 }}>
          ${product.price.toFixed(2)}
        </p>

        {!added ? (
          <button
            onClick={(e) => { e.stopPropagation(); setAdded(true); }}
            style={{
              marginTop: 4, width: '100%',
              border: '1px solid #d1d5db', borderRadius: 6,
              padding: '9px 0', fontSize: 13, fontWeight: 600,
              color: '#444', background: '#fff', cursor: 'pointer',
              transition: 'all 0.2s', letterSpacing: '0.04em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = '#111';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#444';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); router.push('/cart'); }}
            style={{
              marginTop: 4, width: '100%',
              border: '1px solid #111', borderRadius: 6,
              padding: '9px 0', fontSize: 13, fontWeight: 600,
              color: '#111', background: '#fff', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#111';
            }}
          >
            VIEW CART →
          </button>
        )}
      </div>
    </div>
  );
}

export default function Store() {
  const router               = useRouter();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy,   setSortBy]   = useState('default');
  const [sortOpen, setSortOpen] = useState(false);

  const getSorted = () => {
    const list = [...StoreProducts];
    switch (sortBy) {
      case 'popularity': return list.sort((a, b) => a.popularity - b.popularity);
      case 'rating':     return list.sort((a, b) => b.rating - a.rating);
      case 'latest':     return list.sort((a, b) => b.latest - a.latest);
      case 'price_asc':  return list.sort((a, b) => a.price - b.price);
      case 'price_desc': return list.sort((a, b) => b.price - a.price);
      default:           return list;
    }
  };

  const sorted       = getSorted();
  const currentLabel = sortOptions.find((o) => o.value === sortBy)?.label ?? 'Default sorting';

  return (
    <div style={{ width: '100%', background: '#fff' }}>

      <div style={{
        background: '#eeede9',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 5vw, 3.5rem)',
        minHeight: 140,
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, letterSpacing: '0.1em' }}>
            <Link href="/" style={{ fontWeight: 900, fontSize: 13, color: '#111', textDecoration: 'none' }}>
              HOME
            </Link>
            <span style={{ color: '#aaa' }}>|</span>
            <span style={{ color: '#666', textTransform: 'uppercase' }}>Store</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 900, color: '#111',
            margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            STORE
          </h1>
        </div>
        <img src={storeImg} alt="Store"
          style={{ height: 'clamp(100px, 18vw, 176px)', width: 'auto', objectFit: 'contain' }} />
      </div>

      <section style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem)',
      }}>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: 16,
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                width: 36, height: 36, borderRadius: '50%', cursor: 'pointer',
                border: viewMode === 'grid' ? '1px solid #111' : '1px solid #d1d5db',
                background: viewMode === 'grid' ? '#111' : '#fff',
                color: viewMode === 'grid' ? '#fff' : '#888',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1"/>
                <rect x="9" y="1" width="6" height="6" rx="1"/>
                <rect x="1" y="9" width="6" height="6" rx="1"/>
                <rect x="9" y="9" width="6" height="6" rx="1"/>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                width: 36, height: 36, borderRadius: '50%', cursor: 'pointer',
                border: viewMode === 'list' ? '1px solid #111' : '1px solid #d1d5db',
                background: viewMode === 'list' ? '#111' : '#fff',
                color: viewMode === 'list' ? '#fff' : '#888',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="2" width="14" height="2" rx="1"/>
                <rect x="1" y="7" width="14" height="2" rx="1"/>
                <rect x="1" y="12" width="14" height="2" rx="1"/>
              </svg>
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                border: '1px solid #d1d5db', borderRadius: 6,
                padding: '8px 16px', fontSize: 13, color: '#444',
                background: '#fff', cursor: 'pointer',
                minWidth: 200, justifyContent: 'space-between',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#888')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
            >
              <span>{currentLabel}</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ transform: sortOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            {sortOpen && (
              <div style={{
                position: 'absolute', right: 0, top: '100%', marginTop: 4,
                background: '#fff', border: '1px solid #e5e7eb',
                borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                zIndex: 50, minWidth: 220, overflow: 'hidden',
              }}>
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '10px 16px', fontSize: 13,
                      background: sortBy === opt.value ? '#111' : '#fff',
                      color: sortBy === opt.value ? '#fff' : '#444',
                      border: 'none', cursor: 'pointer',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      if (sortBy !== opt.value) e.currentTarget.style.background = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      if (sortBy !== opt.value) e.currentTarget.style.background = '#fff';
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 40,
          }}>
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} listMode />
            ))}
          </div>
        )}

        <p style={{
          marginTop: 32, fontSize: 13, color: '#888',
          borderTop: '1px solid #f0f0f0', paddingTop: 16,
        }}>
          Showing all {StoreProducts.length} results
        </p>
      </section>
    </div>
  );
}
