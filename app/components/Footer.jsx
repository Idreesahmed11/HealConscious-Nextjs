'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const paymentImg = '/assets/payment.png';

const IconLocation = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const IconPhone = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const quickLinks = [
  { label: 'Home',            href: '/'        },
  { label: 'About Us', href: '/about' },
  { label: 'What is Careox?', href: '/careox' },
  { label: 'Shop',            href: '/store'   },
  { label: 'Contact', href: '/connect' },
];

const policies = [
  { label: 'Privacy Policy',     href: '/privacy-policy'     },
  { label: 'Terms & Conditions', href: '/terms'              },
  { label: 'Refund Policy',      href: '/refund-policy'      },
  { label: 'Shipping Policy',    href: '/shipping-policy'    },
  { label: 'Healing Ambassador', href: '/healing-ambassador' },
];

export default function Footer() {
  const [email, setEmail]             = useState('');
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile      = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  const linkStyle = {
    fontSize: 12,
    color: '#666',
    textDecoration: 'none',
    transition: 'color 0.15s',
  };

  return (
    <footer style={{
      borderTop: '0.5px solid #e0ddd8',
      marginTop: '2.5rem',
      padding: isMobile ? '2rem 1rem 1.25rem' : '2.5rem 1.5rem 1.5rem',
      background: '#fff',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '1.5rem' : '2rem',
      }}>

        
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>
            Sign Up For Our Newsletter
          </p>
          <p style={{ fontSize: 12, color: '#777', marginBottom: 14, lineHeight: 1.6 }}>
            Get updates and offers in your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '8px 10px',
              border: '0.5px solid #bbb', borderRadius: 3,
              fontSize: 12, color: '#222', background: '#fff',
              outline: 'none', marginBottom: 8, boxSizing: 'border-box',
            }}
          />
          <button
            style={{
              width: '100%', padding: '9px',
              background: '#222', color: '#fff',
              fontSize: 12, fontWeight: 600,
              border: 'none', borderRadius: 3,
              cursor: 'pointer', letterSpacing: '0.06em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#444')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#222')}
          >
            SUBSCRIBE
          </button>
        </div>

        
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 14 }}>Quick Links</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, padding: 0, margin: 0 }}>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

    
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 14 }}>Our Policy</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, padding: 0, margin: 0 }}>
            {policies.map((l) => (
              <li key={l.label}>
                <Link href={l.href} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                >{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 14 }}>Contact Us</p>
          {[
            { Icon: IconLocation, text: '111B S Gov Avenue, STE 7126 19904 Dover, DE' },
            { Icon: IconPhone,    text: '+1 (012) 345-6789 - Whatsapp'                },
            { Icon: IconMail,     text: 'healconscious.com'                           },
          ].map(({ Icon, text }) => (
            <div key={text} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
              <span style={{ color: '#777', marginTop: 2, flexShrink: 0 }}><Icon /></span>
              <span style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

    
      <div style={{
        borderTop: '0.5px solid #e0ddd8',
        marginTop: '2rem', paddingTop: '1rem',
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 8,
        flexDirection: isSmallMobile ? 'column' : 'row',
        alignItems: isSmallMobile ? 'flex-start' : 'center',
      }}>
        <p style={{ fontSize: 14, color: 'gray', margin: 0 }}>
          © 2025-26 Heal Conscious Inc. All Rights Reserved.
        </p>
        <img src={paymentImg} alt="Payment Methods" style={{ width: '120px', height: 'auto' }} />
      </div>
    </footer>
  );
}