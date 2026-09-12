import React from 'react';
import { HighlightText } from '../components/HighlightText';
import { HandDrawnArrow } from '../components/HandDrawnArrow';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        position: 'relative',
        borderTop: '2px dashed var(--pencil-line)',
        backgroundColor: 'var(--bg-paper-pure)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            maxWidth: '820px',
            marginBottom: '3.5rem',
          }}
        >
          <div className="section-tag">
            <span>[ 04 // ABOUT VAEBHV ]</span>
            <span style={{ color: 'var(--ink-muted)' }}>&bull;</span>
            <span style={{ color: 'var(--accent-crimson)' }}>The Modern Agency Model</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '-0.015em',
            }}
          >
            BUILT FOR BRANDS THAT NEED{' '}
            <HighlightText color="yellow">
              UNFAIR LEVERAGE.
            </HighlightText>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--ink-secondary)',
              lineHeight: 1.7,
              marginBottom: '0.85rem',
            }}
          >
            Traditional agencies rely on broken paradigms: bloated monthly decks, junior account coordinators,
            and awards that do nothing for your bottom line.
          </p>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--ink-secondary)',
              lineHeight: 1.7,
            }}
          >
            <strong>VAEBHV</strong> unites multi-channel media buying across <strong>Meta Ads Manager</strong>,{' '}
            <strong>Google Ads Manager</strong>, and <strong>ChatGPT Ads</strong> with an in-house creative hook engine.
            Every dollar is guided by first-party attribution and weekly testing velocity.
          </p>
        </div>

        {/* 3 Core Operating Tenets (Compact, Balanced Height) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Tenet 1 */}
          <div
            className="sketch-box"
            style={{
              padding: '1.75rem 1.6rem',
              position: 'relative',
              backgroundColor: 'var(--bg-paper)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              className="tape-strip"
              style={{
                top: '-8px',
                right: '25px',
                width: '55px',
                height: '14px',
                transform: 'rotate(2deg)',
              }}
            />
            <div>
              <span
                className="font-hand"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent-crimson)',
                  display: 'block',
                  marginBottom: '0.5rem',
                  lineHeight: 1.1,
                }}
              >
                01 // Senior Operators
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  lineHeight: 1.25,
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Direct Operator Access
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-secondary)',
                }}
              >
                Communicate directly with the media buyers who manage your Meta &amp; Google budgets, script your video hooks,
                and analyze your attribution models. Zero telephone games.
              </p>
            </div>
            <div
              style={{
                marginTop: '1.25rem',
                borderTop: '1px dashed var(--pencil-line)',
                paddingTop: '0.65rem',
              }}
            >
              <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--ink-primary)' }}>
                ↳ Senior eyes on every dollar deployed
              </span>
            </div>
          </div>

          {/* Tenet 2 */}
          <div
            className="sketch-box"
            style={{
              padding: '1.75rem 1.6rem',
              position: 'relative',
              backgroundColor: 'var(--bg-paper)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              className="tape-strip"
              style={{
                top: '-8px',
                left: '25px',
                width: '55px',
                height: '14px',
                transform: 'rotate(-2deg)',
              }}
            />
            <div>
              <span
                className="font-hand"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent-navy)',
                  display: 'block',
                  marginBottom: '0.5rem',
                  lineHeight: 1.1,
                }}
              >
                02 // Weekly Velocity
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  lineHeight: 1.25,
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Creative Hook Cadence
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-secondary)',
                }}
              >
                Algorithms thrive on creative variety. We produce and flight fresh UGC, motion assets, and search headlines
                every week so your campaigns never succumb to ad fatigue.
              </p>
            </div>
            <div
              style={{
                marginTop: '1.25rem',
                borderTop: '1px dashed var(--pencil-line)',
                paddingTop: '0.65rem',
              }}
            >
              <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--ink-primary)' }}>
                ↳ 15–30 verified creative hooks monthly
              </span>
            </div>
          </div>

          {/* Tenet 3 */}
          <div
            className="sketch-box"
            style={{
              padding: '1.75rem 1.6rem',
              position: 'relative',
              backgroundColor: 'var(--bg-paper)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              className="tape-strip"
              style={{
                top: '-8px',
                right: '35px',
                width: '60px',
                height: '14px',
                transform: 'rotate(1deg)',
              }}
            />
            <div>
              <span
                className="font-hand"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--ink-primary)',
                  display: 'block',
                  marginBottom: '0.5rem',
                  lineHeight: 1.1,
                }}
              >
                03 // Commercial Truth
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  lineHeight: 1.25,
                  marginBottom: '0.65rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Blended MER &amp; Contribution
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-secondary)',
                }}
              >
                We track blended Marketing Efficiency Ratio (MER), first-party server-side CAPI events, and customer payback
                periods to ensure scaling produces true net profit.
              </p>
            </div>
            <div
              style={{
                marginTop: '1.25rem',
                borderTop: '1px dashed var(--pencil-line)',
                paddingTop: '0.65rem',
              }}
            >
              <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--ink-primary)' }}>
                ↳ Contribution margin &gt; vanity metrics
              </span>
            </div>
          </div>
        </div>

        {/* Strategist Notebook Note & Founder Signature */}
        <div
          style={{
            backgroundColor: 'var(--bg-sticky-yellow)',
            border: '2px solid var(--ink-primary)',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            padding: '2rem 2.25rem',
            boxShadow: '4px 5px 0px var(--ink-primary)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <div
              className="font-hand"
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--accent-crimson)',
                marginBottom: '0.4rem',
              }}
            >
              A note from Vaebhv &amp; the studio partners:
            </div>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: 'var(--ink-primary)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
              }}
            >
              "We manage a lean roster of partner brands. By pairing deep technical fluency across Meta Ads,
              Google Ads, and emerging AI advertising with disciplined creative testing, we give our partners an unfair advantage.
              If we accept your account, your commercial growth is our singular priority."
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <HandDrawnArrow
              direction="curved-left"
              label="Boutique commitment"
              color="var(--ink-primary)"
              labelPosition="top"
            />
            <div
              className="font-hand"
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--ink-primary)',
                marginTop: '0.2rem',
                transform: 'rotate(-2.5deg)',
              }}
            >
              Vaebhv &amp; Partners
            </div>
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'monospace',
                color: 'var(--ink-muted)',
                letterSpacing: '0.04em',
              }}
            >
              VAEBHV PERFORMANCE STUDIO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
