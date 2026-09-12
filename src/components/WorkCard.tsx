import type { WorkItem } from '../data/agencyData';

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work, index }) => {
  return (
    <article
      className="work-card"
      style={{
        backgroundColor: 'var(--bg-paper-pure)',
        border: '2px solid var(--ink-primary)',
        borderRadius:
          index % 2 === 0
            ? '12px 255px 15px 225px/225px 15px 255px 12px'
            : '255px 12px 225px 15px/15px 225px 12px 255px',
        overflow: 'hidden',
        boxShadow: '3px 5px 0px rgba(22, 22, 21, 0.95)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Tape Strip Accent */}
      <div
        className="tape-strip-clear"
        style={{
          top: '8px',
          right: '20px',
          width: '55px',
          height: '14px',
          transform: 'rotate(-3deg)',
        }}
      />

      {/* Artboard / Visual Preview Canvas (Compact Height) */}
      <div
        style={{
          backgroundColor: 'var(--bg-paper-muted)',
          borderBottom: '2px solid var(--ink-primary)',
          padding: '1.25rem 1.4rem',
          minHeight: '130px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundImage:
            'radial-gradient(circle, rgba(22, 22, 21, 0.1) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* Top bar with tag & active status */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.85rem',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '0.2rem 0.5rem',
              borderRadius: '3px',
              border: '1px solid var(--pencil-line)',
              lineHeight: 1.2,
            }}
          >
            {work.artboardSubtitle}
          </span>
          <span
            className="font-hand"
            style={{
              fontSize: '1.05rem',
              color: 'var(--accent-crimson)',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            ● active
          </span>
        </div>

        {/* Central Schematic (Compact) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.5rem 0',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
              height: '46px',
              border: '1.5px dashed var(--ink-muted)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '0 0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <div
              style={{
                padding: '0.2rem 0.4rem',
                border: '1px solid var(--ink-primary)',
                borderRadius: '3px',
                fontSize: '0.68rem',
                fontFamily: 'monospace',
                fontWeight: 700,
              }}
            >
              HOOK
            </div>
            <span style={{ color: 'var(--ink-faint)', fontSize: '0.85rem' }}>➔</span>
            <div
              style={{
                padding: '0.2rem 0.4rem',
                border: '1px solid var(--accent-navy)',
                borderRadius: '3px',
                fontSize: '0.68rem',
                fontWeight: 700,
                backgroundColor: 'rgba(30, 58, 138, 0.08)',
              }}
            >
              FEED
            </div>
            <span style={{ color: 'var(--ink-faint)', fontSize: '0.85rem' }}>➔</span>
            <div
              style={{
                padding: '0.2rem 0.4rem',
                backgroundColor: 'var(--marker-yellow)',
                border: '1px solid var(--ink-primary)',
                fontSize: '0.68rem',
                fontWeight: 700,
                borderRadius: '3px',
              }}
            >
              CONVERT
            </div>
          </div>
        </div>

        {/* Platform Chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: work.accentColor,
              }}
            />
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--ink-primary)',
              }}
            >
              {work.platformStack}
            </span>
          </div>
          <span
            style={{
              fontSize: '0.7rem',
              color: 'var(--ink-muted)',
              fontFamily: 'monospace',
            }}
          >
            ID: {work.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Card Body (Streamlined Height) */}
      <div style={{ padding: '1.4rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--accent-crimson)',
              marginBottom: '0.35rem',
            }}
          >
            {work.realWorldScope}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--ink-primary)',
              marginBottom: '0.75rem',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            {work.label}
          </h3>

          {/* Deliverables as Compact Inline Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.35rem',
              marginBottom: '1rem',
            }}
          >
            {work.deliverables.map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--ink-secondary)',
                  backgroundColor: 'var(--bg-paper-muted)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '3px',
                  border: '1px solid rgba(22, 22, 21, 0.08)',
                  lineHeight: 1.3,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Strategist Handwritten Note */}
        <div
          style={{
            borderTop: '1px dashed var(--pencil-line)',
            paddingTop: '0.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.4rem',
          }}
        >
          <span
            className="font-hand"
            style={{
              fontSize: '1.12rem',
              color: 'var(--ink-primary)',
              lineHeight: 1.25,
            }}
          >
            ↳ {work.note}
          </span>
        </div>
      </div>

      <style>{`
        .work-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 5px 8px 0px rgba(22, 22, 21, 0.98) !important;
        }
      `}</style>
    </article>
  );
};
