import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-paper-pure)',
        borderTop: '2px solid var(--ink-primary)',
        marginTop: 'auto',
        position: 'relative',
        padding: '5rem 0 3rem 0',
      }}
    >
      {/* Top ruler line with notebook markings */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          right: 0,
          height: '6px',
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--ink-primary) 0, var(--ink-primary) 1px, transparent 1px, transparent 20px)',
          opacity: 0.6,
        }}
      />

      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1: VAEBHV Brand & Identity */}
          <div style={{ maxWidth: '360px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.8rem',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
              }}
            >
              VAEBHV
            </div>
            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--ink-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              Full-funnel performance advertising studio managing capital across Meta Ads Manager,
              Google Ads Manager, and ChatGPT Ads.
            </p>

            {/* Platform Stamps */}
            <div
              style={{
                display: 'inline-block',
                border: '2px dashed var(--accent-crimson)',
                borderRadius: '8px',
                padding: '0.45rem 0.95rem',
                transform: 'rotate(-1.5deg)',
              }}
            >
              <span
                className="font-hand"
                style={{
                  color: 'var(--accent-crimson)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                ★ META &bull; GOOGLE &bull; CHATGPT CERTIFIED
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {[
                { label: 'Platforms & Services', href: '#services' },
                { label: 'Campaign Systems', href: '#work' },
                { label: 'Methodology', href: '#process' },
                { label: 'About VAEBHV', href: '#about' },
                { label: 'Account Audit', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.96rem',
                      color: 'var(--ink-secondary)',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span style={{ color: 'var(--accent-crimson)' }}>→</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Placeholder & Direct Inquiries */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Direct Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href="mailto:hello@vaebhv.com"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--ink-primary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                hello@vaebhv.com
              </a>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
                Performance Advertising &amp; Growth Studio
              </p>
              <div
                className="font-hand"
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--accent-navy)',
                  marginTop: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                Diagnostic audits returned in &lt; 48 hours
              </div>
            </div>
          </div>

          {/* Column 4: Back to Top & Quote */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                Return
              </h4>
              <button
                type="button"
                onClick={scrollToTop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.15rem',
                  border: '2px solid var(--ink-primary)',
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  backgroundColor: 'var(--bg-paper)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  boxShadow: '2px 3px 0px var(--ink-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>↑ TOP OF PAGE</span>
              </button>
            </div>

            <div
              className="font-hand"
              style={{
                fontSize: '1.2rem',
                color: 'var(--ink-muted)',
                marginTop: '1.75rem',
                transform: 'rotate(1deg)',
                lineHeight: 1.3,
              }}
            >
              "High-velocity creative testing &bull; Algorithmic media buying."
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--pencil-line)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontSize: '0.88rem',
              color: 'var(--ink-muted)',
            }}
          >
            &copy; {new Date().getFullYear()} VAEBHV. All rights reserved. Meta, Google &amp; ChatGPT are trademarks of their respective owners.
          </div>
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--ink-muted)',
              fontFamily: 'monospace',
            }}
          >
            VAEBHV STUDIO // MULTI-CHANNEL DEPLOYMENT ENGINE
          </div>
        </div>
      </div>
    </footer>
  );
};
