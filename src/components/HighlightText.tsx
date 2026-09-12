import React from 'react';

interface HighlightTextProps {
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'peach';
  className?: string;
  scribble?: boolean;
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  children,
  color = 'yellow',
  className = '',
  scribble = false,
}) => {
  const getMarkerBg = () => {
    switch (color) {
      case 'blue':
        return 'var(--marker-blue-soft)';
      case 'peach':
        return 'rgba(254, 215, 170, 0.55)';
      case 'yellow':
      default:
        return 'var(--marker-yellow-soft)';
    }
  };

  return (
    <span
      className={`highlight-text-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        zIndex: 1,
        padding: '0 0.2em',
        lineHeight: 'inherit',
      }}
    >
      {/* Hand-drawn marker brush background with generous height */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-2px',
          right: '-4px',
          bottom: '12%',
          height: '68%',
          backgroundColor: getMarkerBg(),
          zIndex: -1,
          borderRadius: '4px 8px 6px 3px',
          transform: 'rotate(-0.5deg)',
          pointerEvents: 'none',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
        }}
      />
      {children}
      {scribble && (
        <svg
          aria-hidden="true"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '10px',
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <path
            d="M 1 9 Q 25 1 50 8 T 99 6"
            fill="none"
            stroke="var(--accent-crimson)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
};
