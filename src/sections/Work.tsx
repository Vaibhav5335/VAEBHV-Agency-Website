import React from 'react';
import { WORK_DATA } from '../data/agencyData';
import { WorkCard } from '../components/WorkCard';
import { HighlightText } from '../components/HighlightText';

export const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-paper-pure)',
        borderTop: '2px solid var(--ink-primary)',
        borderBottom: '2px solid var(--ink-primary)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4.5rem',
            gap: '2.5rem',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            <div className="section-tag">
              <span>[ 03 // CAMPAIGN ARCHITECTURES ]</span>
              <span style={{ color: 'var(--ink-muted)' }}>&bull;</span>
              <span style={{ color: 'var(--ink-secondary)' }}>Live Multi-Channel Frameworks</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              PROVEN CAMPAIGN ENGINES &amp;{' '}
              <HighlightText color="yellow">
                MEDIA ARCHITECTURES.
              </HighlightText>
            </h2>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--ink-secondary)',
                lineHeight: 1.75,
              }}
            >
              How VAEBHV structures real account architectures across Meta Advantage+, Google Performance Max,
              exact-match search intent, and conversational ChatGPT placements.
            </p>
          </div>

          {/* Strategist Stamp */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              border: '2px dashed var(--ink-muted)',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-paper-muted)',
              transform: 'rotate(1deg)',
            }}
          >
            <div
              className="font-hand"
              style={{
                fontSize: '1.35rem',
                color: 'var(--ink-primary)',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              "Disciplined media buying &bull; Zero guesswork"
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--ink-muted)',
                fontFamily: 'monospace',
                marginTop: '0.35rem',
              }}
            >
              VAEBHV ARCHITECTURE PROTOCOL // 2026
            </div>
          </div>
        </div>

        {/* Work Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
          }}
        >
          {WORK_DATA.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
