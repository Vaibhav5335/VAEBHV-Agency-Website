import React from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceCard } from '../components/ServiceCard';
import { HighlightText } from '../components/HighlightText';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
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
            maxWidth: '860px',
            marginBottom: '4.5rem',
          }}
        >
          <div className="section-tag">
            <span>[ 02 // PLATFORMS &amp; CAPABILITIES ]</span>
            <span style={{ color: 'var(--ink-muted)' }}>&bull;</span>
            <span style={{ color: 'var(--ink-secondary)' }}>End-to-End Advertising</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}
          >
            PERFORMANCE ADVERTISING ACROSS{' '}
            <HighlightText color="blue">
              META, GOOGLE &amp; CHATGPT.
            </HighlightText>
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--ink-secondary)',
              lineHeight: 1.75,
            }}
          >
            Modern brand scaling requires a synchronized channel strategy: generating visceral demand with Meta Ads,
            capturing high-intent buyers on Google Search &amp; PMax, and leading early adoption inside ChatGPT conversational AI placements.
          </p>

          <div
            className="font-hand"
            style={{
              marginTop: '1.25rem',
              fontSize: '1.35rem',
              color: 'var(--accent-crimson)',
              lineHeight: 1.35,
            }}
          >
            ✎ VAEBHV Rule: No isolated platform silos. Every campaign shares attribution signals and creative learnings.
          </div>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
