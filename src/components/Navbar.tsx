import React, { useState } from 'react';
import { CTA } from './CTA';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(250, 248, 244, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid var(--pencil-line)',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.85rem',
          paddingBottom: '0.85rem',
        }}
      >
        {/* Brand Logo & Clean Studio Tag */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.75rem',
                letterSpacing: '-0.02em',
                color: 'var(--ink-primary)',
                lineHeight: 1,
              }}
            >
              VAEBHV
            </span>
            <span
              aria-hidden="true"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-crimson)',
                display: 'inline-block',
              }}
            />
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              letterSpacing: '0.08em',
              borderLeft: '1.5px solid var(--pencil-line)',
              paddingLeft: '0.6rem',
              lineHeight: 1.2,
            }}
          >
            ADVERTISING STUDIO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem',
          }}
        >
          <a
            href="#services"
            className="nav-link"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--ink-secondary)',
              position: 'relative',
              padding: '0.25rem 0',
              transition: 'color 0.2s ease',
            }}
          >
            Services
          </a>
          <a
            href="#work"
            className="nav-link"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--ink-secondary)',
              position: 'relative',
              padding: '0.25rem 0',
              transition: 'color 0.2s ease',
            }}
          >
            Work
          </a>
          <a
            href="#process"
            className="nav-link"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--ink-secondary)',
              position: 'relative',
              padding: '0.25rem 0',
              transition: 'color 0.2s ease',
            }}
          >
            Process
          </a>
          <a
            href="#about"
            className="nav-link"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--ink-secondary)',
              position: 'relative',
              padding: '0.25rem 0',
              transition: 'color 0.2s ease',
            }}
          >
            About
          </a>
        </nav>

        {/* Action CTA & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="nav-desktop-cta">
            <CTA href="#contact" variant="primary" size="sm" arrow>
              Start a Project
            </CTA>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.45rem',
              border: '2px solid var(--ink-primary)',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-paper-pure)',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ink-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="15" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            borderTop: '1px dashed var(--pencil-line)',
            padding: '1.25rem 1.5rem',
            backgroundColor: 'var(--bg-paper)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--ink-primary)',
            }}
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--ink-primary)',
            }}
          >
            Work
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--ink-primary)',
            }}
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--ink-primary)',
            }}
          >
            About
          </a>
          <div style={{ paddingTop: '0.5rem' }}>
            <CTA
              href="#contact"
              variant="primary"
              size="md"
              arrow
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </CTA>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav, .nav-desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        .nav-link:hover {
          color: var(--ink-primary) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background-color: var(--accent-crimson);
          transition: width 0.2s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
