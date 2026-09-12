import React from 'react';
import { PROCESS_DATA } from '../data/agencyData';
import { HighlightText } from '../components/HighlightText';

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="section-padding"
      style={{
        position: 'relative',
        borderTop: '2px dashed var(--pencil-line)',
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
            <span>[ 03 // VAEBHV METHODOLOGY ]</span>
            <span style={{ color: 'var(--ink-muted)' }}>&bull;</span>
            <span style={{ color: 'var(--ink-secondary)' }}>Account Lifecycle</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            A SYSTEMATIC 5-STAGE{' '}
            <HighlightText color="peach">
              GROWTH SPRINT.
            </HighlightText>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--ink-secondary)',
              lineHeight: 1.7,
            }}
          >
            How VAEBHV onboards, structures, and scales accounts across Meta, Google, and ChatGPT Ads.
            Governed by financial guardrails, clean data hygiene, and high creative velocity.
          </p>
        </div>

        {/* 5-Step Connected Process Flow (Compact, Balanced Height) */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {PROCESS_DATA.map((step, index) => (
            <div
              key={step.step}
              className="process-card"
              style={{
                position: 'relative',
                backgroundColor: 'var(--bg-paper-pure)',
                border: '2px solid var(--ink-primary)',
                borderRadius:
                  index % 2 === 0
                    ? '255px 15px 225px 15px/15px 225px 15px 255px'
                    : '15px 225px 15px 255px/255px 15px 225px 15px',
                padding: '1.5rem 1.35rem',
                boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div>
                {/* Step Number with Marker Accent */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    className="font-hand"
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--accent-crimson)',
                      lineHeight: 1,
                    }}
                  >
                    {step.step} //
                  </span>

                  {index < PROCESS_DATA.length - 1 && (
                    <span
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--ink-muted)',
                      }}
                    >
                      ➔
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent-navy)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.tagline}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    color: 'var(--ink-secondary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Hand-drawn note & deliverable */}
              <div
                style={{
                  borderTop: '1px dashed var(--pencil-line)',
                  paddingTop: '0.75rem',
                }}
              >
                <div
                  className="font-hand"
                  style={{
                    fontSize: '1.08rem',
                    color: 'var(--ink-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}
                >
                  ↳ "{step.sketchNote}"
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'monospace',
                    color: 'var(--ink-muted)',
                    backgroundColor: 'var(--bg-paper-muted)',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '3px',
                    display: 'inline-block',
                    lineHeight: 1.3,
                  }}
                >
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 5px 7px 0px rgba(22, 22, 21, 0.98) !important;
        }
      `}</style>
    </section>
  );
};
