import React from 'react';
import { CTA } from '../components/CTA';
import { HighlightText } from '../components/HighlightText';
import { HandDrawnArrow } from '../components/HandDrawnArrow';

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-paper)',
        paddingTop: '6.5rem',
        paddingBottom: '7.5rem',
      }}
    >
      <div className="site-container">
        {/* Large Editorial Manifesto Box */}
        <div
          className="sketch-box"
          style={{
            position: 'relative',
            backgroundColor: 'var(--bg-paper-pure)',
            border: '2.5px solid var(--ink-primary)',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            padding: 'clamp(2.5rem, 6vw, 5.5rem)',
            textAlign: 'center',
            boxShadow: '6px 9px 0px var(--ink-primary)',
            overflow: 'hidden',
          }}
        >
          {/* Top tape sticker */}
          <div
            className="tape-strip"
            style={{
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '120px',
            }}
          />

          <div
            className="section-tag"
            style={{
              justifyContent: 'center',
              marginBottom: '1.75rem',
            }}
          >
            <span>[ 05 // SCALE WITH VAEBHV ]</span>
            <span style={{ color: 'var(--ink-muted)' }}>&bull;</span>
            <span style={{ color: 'var(--accent-crimson)' }}>Now Reviewing Q3 Partner Openings</span>
          </div>

          {/* Large Editorial Statement */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5.8vw, 4.2rem)',
              lineHeight: 1.22,
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--ink-primary)',
              maxWidth: '880px',
              margin: '0 auto 2rem auto',
            }}
          >
            READY TO SCALE YOUR{' '}
            <HighlightText color="yellow" scribble>
              ADVERTISING?
            </HighlightText>
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
              color: 'var(--ink-secondary)',
              maxWidth: '720px',
              margin: '0 auto 2.75rem auto',
              lineHeight: 1.7,
            }}
          >
            Whether you want to unlock Advantage+ scaling on Meta, dominate high-intent search on Google,
            or position your brand early in ChatGPT conversational ads, let's conduct an initial account audit.
          </p>

          {/* CTA with hand-drawn annotations */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              position: 'relative',
            }}
          >
            <CTA href="mailto:hello@vaebhv.com?subject=Advertising%20Inquiry%20-%20VAEBHV" variant="primary" size="lg">
              REQUEST AN ACCOUNT AUDIT →
            </CTA>

            {/* Handwritten note below CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '0.5rem',
              }}
            >
              <HandDrawnArrow
                direction="horizontal-right"
                color="var(--ink-muted)"
              />
              <span
                className="font-hand"
                style={{
                  fontSize: '1.35rem',
                  color: 'var(--ink-secondary)',
                  transform: 'rotate(-1deg)',
                  lineHeight: 1.3,
                }}
              >
                Direct review by senior strategists &bull; 48-hour diagnostic turnaround
              </span>
            </div>
          </div>

          {/* Corner Sketch Doodle */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '25px',
              right: '35px',
              opacity: 0.8,
            }}
            className="cta-stamp-badge"
          >
            <div
              className="font-hand"
              style={{
                border: '1.5px dashed var(--pencil-line-dark)',
                borderRadius: '50%',
                width: '85px',
                height: '85px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '0.85rem',
                fontWeight: 700,
                transform: 'rotate(12deg)',
                color: 'var(--ink-muted)',
                lineHeight: 1.2,
              }}
            >
              META &bull; GOOGLE &bull; CHATGPT
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-stamp-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
