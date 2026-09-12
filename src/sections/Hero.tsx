import React from 'react';
import { CTA } from '../components/CTA';
import { HighlightText } from '../components/HighlightText';
import { HandDrawnArrow } from '../components/HandDrawnArrow';
import { PLATFORMS_DATA } from '../data/agencyData';

export const Hero: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Top Agency Status Badge */}
        <div
          className="fade-in-entry"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.35rem 1rem',
            backgroundColor: 'var(--bg-paper-pure)',
            border: '1.5px solid var(--ink-primary)',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '2px 2px 0px var(--ink-primary)',
            marginBottom: '1.75rem',
            transform: 'rotate(-0.75deg)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-crimson)',
              display: 'inline-block',
            }}
          />
          <span
            className="font-hand"
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--ink-primary)',
              lineHeight: 1.2,
            }}
          >
            VAEBHV Studio // Meta &bull; Google &bull; ChatGPT Ads
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Hero Content Column */}
          <div style={{ maxWidth: '980px' }}>
            {/* Main Headline */}
            <h1
              className="fade-in-entry"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                lineHeight: 1.22,
                letterSpacing: '-0.015em',
                color: 'var(--ink-primary)',
                marginBottom: '1.5rem',
              }}
            >
              WE MAKE BRANDS{' '}
              <HighlightText color="yellow" scribble>
                IMPOSSIBLE
              </HighlightText>{' '}
              TO IGNORE.
            </h1>

            {/* Supporting Copy */}
            <p
              className="fade-in-entry"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                lineHeight: 1.65,
                color: 'var(--ink-secondary)',
                maxWidth: '740px',
                marginBottom: '2.25rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
              }}
            >
              High-yield performance advertising across <strong>Meta Ads Manager</strong> (Instagram &amp; Advantage+),{' '}
              <strong>Google Ads Manager</strong> (Search &amp; PMax), and <strong>ChatGPT Ads</strong>.
              We pair thumb-stopping creative production with rigorous multi-touch attribution.
            </p>

            {/* CTAs & Hand-drawn Arrows Wrapper */}
            <div
              className="fade-in-entry"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                position: 'relative',
                marginBottom: '2.5rem',
              }}
            >
              <CTA href="#contact" variant="primary" size="lg" arrow>
                START A PROJECT
              </CTA>

              <CTA href="#work" variant="secondary" size="lg">
                SEE OUR WORK
              </CTA>

              {/* Hand-drawn arrow pointing to primary action */}
              <div
                className="hero-arrow-annotation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginLeft: '0.5rem',
                }}
              >
                <HandDrawnArrow
                  direction="loop"
                  label="No vanity metrics, pure revenue"
                  color="var(--accent-crimson)"
                  labelPosition="top"
                />
              </div>
            </div>

            {/* Supported Platforms Strip */}
            <div
              className="fade-in-entry"
              style={{
                borderTop: '1px dashed var(--pencil-line)',
                paddingTop: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span
                className="font-hand"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--ink-secondary)',
                }}
              >
                Active Channels:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {PLATFORMS_DATA.map((p) => (
                  <div
                    key={p.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.35rem 0.75rem',
                      backgroundColor: 'var(--bg-paper-pure)',
                      border: '1.5px solid var(--ink-primary)',
                      borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                      boxShadow: '2px 2px 0px rgba(22, 22, 21, 0.8)',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: p.color,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        color: 'var(--ink-primary)',
                      }}
                    >
                      {p.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'monospace',
                        color: 'var(--ink-muted)',
                        backgroundColor: 'var(--bg-paper-muted)',
                        padding: '0.1rem 0.3rem',
                        borderRadius: '3px',
                      }}
                    >
                      {p.badgeText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sketch-Style Agency Strategy Board Visual Element (Compact) */}
          <div
            className="strategy-board-container"
            style={{
              position: 'relative',
              width: '100%',
              backgroundColor: 'var(--bg-paper-pure)',
              border: '2px solid var(--ink-primary)',
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              padding: '2rem',
              boxShadow: '5px 7px 0px var(--ink-primary)',
              backgroundImage:
                'linear-gradient(to right, rgba(22, 22, 21, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 22, 21, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* Board Header Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px dashed var(--pencil-line)',
                paddingBottom: '1rem',
                marginBottom: '1.5rem',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    backgroundColor: 'var(--ink-primary)',
                    color: '#FFF',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '3px',
                  }}
                >
                  BOARD // VAEBHV-GROWTH-MATRIX
                </span>
                <span
                  className="font-hand"
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--ink-muted)',
                    lineHeight: 1.2,
                  }}
                >
                  "Meta + Google + ChatGPT Architecture"
                </span>
              </div>
              <div
                className="font-hand"
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--accent-crimson)',
                  fontWeight: 700,
                }}
              >
                ● LIVE DEPLOYMENT
              </div>
            </div>

            {/* Pinned Elements Grid (Compact Height) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                position: 'relative',
              }}
            >
              {/* Note 1: Meta Ads Manager */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-sticky-yellow)',
                  border: '1.5px solid var(--ink-primary)',
                  borderRadius: '12px 255px 15px 225px/225px 15px 255px 12px',
                  padding: '1.35rem 1.25rem',
                  boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.8)',
                  transform: 'rotate(-1.5deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  className="tape-strip"
                  style={{
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(1deg)',
                    width: '60px',
                    height: '14px',
                  }}
                />
                <div
                  className="font-hand"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0668E1',
                    marginBottom: '0.25rem',
                    lineHeight: 1.1,
                  }}
                >
                  01 // Meta Ads Manager
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    marginBottom: '0.45rem',
                  }}
                >
                  Advantage+ Shopping (ASC)
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-primary)', lineHeight: 1.55 }}>
                  Consolidate budget into Advantage+ campaigns with CAPI server tracking. Feed algorithm 15+ fresh motion &amp; UGC hooks weekly.
                </p>
                <div
                  style={{
                    marginTop: '0.85rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderRadius: '4px',
                    fontSize: '0.74rem',
                    fontFamily: 'monospace',
                  }}
                >
                  Reels &bull; CAPI Live
                </div>
              </div>

              {/* Note 2: Google Ads Manager */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--bg-sticky-blue)',
                  border: '1.5px solid var(--ink-primary)',
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  padding: '1.35rem 1.25rem',
                  boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.8)',
                  transform: 'rotate(1.5deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  className="tape-strip"
                  style={{
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-2deg)',
                    width: '60px',
                    height: '14px',
                  }}
                />
                <div
                  className="font-hand"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0F9D58',
                    marginBottom: '0.25rem',
                    lineHeight: 1.1,
                  }}
                >
                  02 // Google Ads Manager
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    marginBottom: '0.45rem',
                  }}
                >
                  Search &amp; Performance Max
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-primary)', lineHeight: 1.55 }}>
                  Capture exact commercial search intent. Deploy PMax with custom audience signals and YouTube video asset groups.
                </p>
                <div
                  style={{
                    marginTop: '0.85rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderRadius: '4px',
                    fontSize: '0.74rem',
                    fontFamily: 'monospace',
                  }}
                >
                  Target CPA / ROAS Scaling
                </div>
              </div>

              {/* Note 3: ChatGPT & AI Ads */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--ink-primary)',
                  borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
                  padding: '1.35rem 1.25rem',
                  boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.8)',
                  transform: 'rotate(-1deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  className="tape-strip"
                  style={{
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(2deg)',
                    width: '60px',
                    height: '14px',
                  }}
                />
                <div
                  className="font-hand"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#10A37F',
                    marginBottom: '0.25rem',
                    lineHeight: 1.1,
                  }}
                >
                  03 // ChatGPT &amp; AI Ads
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    marginBottom: '0.45rem',
                  }}
                >
                  Prompt Search Placements
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
                  Position your brand within conversational queries, generative prompt discovery, and AI answer engine recommendation cards.
                </p>
                <div
                  style={{
                    marginTop: '0.85rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: 'var(--marker-yellow-soft)',
                    borderRadius: '4px',
                    fontSize: '0.74rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                  }}
                >
                  AI Search Channel
                </div>
              </div>
            </div>

            {/* Board Footer */}
            <div
              style={{
                marginTop: '1.5rem',
                borderTop: '1px dashed var(--pencil-line)',
                paddingTop: '0.85rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div
                className="font-hand"
                style={{
                  fontSize: '1.12rem',
                  color: 'var(--ink-secondary)',
                  lineHeight: 1.2,
                }}
              >
                ✎ "Meta builds demand &bull; Google captures intent &bull; ChatGPT drives conversational validation."
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase',
                }}
              >
                VAEBHV Studio // Growth Blueprint
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-arrow-annotation {
            display: none !important;
          }
          .strategy-board-container {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
