import type { ServiceItem } from '../data/agencyData';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const renderDoodle = (type: ServiceItem['doodleType']) => {
    const strokeColor = 'var(--ink-primary)';
    switch (type) {
      case 'meta':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <path
              d="M12 28C8.5 28 6 25 6 21C6 16.5 10 13 14 13C18 13 21.5 17 24 21C26.5 25 30 29 34 29C38 29 42 25.5 42 21C42 17 39.5 14 36 14C32 14 28.5 18 26 22"
              stroke="#0668E1"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="14" cy="20" r="1.5" fill="#0668E1" />
            <circle cx="34" cy="22" r="1.5" fill="#0668E1" />
          </svg>
        );

      case 'google':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <rect
              x="6"
              y="14"
              width="36"
              height="18"
              rx="9"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <circle cx="33" cy="23" r="3.5" stroke="#0F9D58" strokeWidth="2" />
            <line x1="36" y1="26" x2="39" y2="29" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'ai':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <path
              d="M8 12C8 9.5 10 7.5 12.5 7.5H35.5C38 7.5 40 9.5 40 12V24C40 26.5 38 28.5 35.5 28.5H18L10 35V28.5H12.5"
              stroke="#10A37F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="18" r="3" fill="rgba(16, 163, 127, 0.25)" stroke="#10A37F" strokeWidth="1.5" />
          </svg>
        );

      case 'creative':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <rect
              x="8"
              y="10"
              width="32"
              height="26"
              rx="4"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <path
              d="M20 18L30 23L20 28V18Z"
              fill="var(--marker-yellow)"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'landing':
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <rect
              x="8"
              y="10"
              width="32"
              height="28"
              rx="3"
              stroke={strokeColor}
              strokeWidth="2"
            />
            <line x1="8" y1="18" x2="40" y2="18" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="12" cy="14" r="1.5" fill={strokeColor} />
            <circle cx="17" cy="14" r="1.5" fill={strokeColor} />
            <rect x="12" y="22" width="12" height="5" fill="var(--marker-blue)" rx="1" />
          </svg>
        );

      case 'growth':
      default:
        return (
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <path d="M10 36V12" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M10 36H38" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path
              d="M14 30C18 27 24 23 28 16L34 12"
              stroke="var(--accent-crimson)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
    }
  };

  const baseRotation = (index % 2 === 0 ? -0.3 : 0.3) * ((index % 3) + 1);

  return (
    <article
      className="service-card"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-paper-pure)',
        border: '2px solid var(--ink-primary)',
        borderRadius:
          index % 2 === 0
            ? '255px 15px 225px 15px/15px 225px 15px 255px'
            : '15px 225px 15px 255px/255px 15px 225px 15px',
        padding: '1.75rem 1.6rem',
        boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: `rotate(${baseRotation}deg)`,
      }}
    >
      {/* Top Tape Sticker Accent */}
      <div
        className="tape-strip"
        style={{
          top: '-8px',
          right: index % 2 === 0 ? '24px' : 'auto',
          left: index % 2 === 0 ? 'auto' : '24px',
          width: '50px',
          height: '14px',
          transform: `rotate(${index % 2 === 0 ? '2.5deg' : '-2.5deg'})`,
        }}
      />

      <div>
        {/* Card Header: Number & Doodle in compact row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.9rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span
              className="font-hand"
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--accent-crimson)',
                lineHeight: 1,
              }}
            >
              {service.number}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                letterSpacing: '0.04em',
              }}
            >
              {service.categoryTag}
            </span>
          </div>

          <div
            className="service-doodle"
            style={{
              padding: '0.25rem',
              backgroundColor: 'var(--bg-paper-muted)',
              borderRadius: '6px',
              border: '1px solid var(--pencil-line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {renderDoodle(service.doodleType)}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--ink-primary)',
            marginBottom: '0.65rem',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.6,
            color: 'var(--ink-secondary)',
            marginBottom: '1.25rem',
          }}
        >
          {service.description}
        </p>

        {/* Capabilities Tags (Compact pills) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '1.2rem',
          }}
        >
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                padding: '0.2rem 0.55rem',
                backgroundColor: 'var(--bg-paper)',
                borderRadius: '4px',
                color: 'var(--ink-primary)',
                border: '1px solid rgba(22, 22, 21, 0.1)',
                lineHeight: 1.3,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Hand-drawn Note */}
      <div
        style={{
          borderTop: '1px dashed var(--pencil-line)',
          paddingTop: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontSize: '0.8rem',
            color: 'var(--accent-crimson)',
          }}
        >
          ✎
        </span>
        <span
          className="font-hand"
          style={{
            fontSize: '1.1rem',
            color: 'var(--ink-secondary)',
            lineHeight: 1.2,
          }}
        >
          {service.annotation}
        </span>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 5px 7px 0px rgba(22, 22, 21, 0.98) !important;
        }
      `}</style>
    </article>
  );
};
