import React from 'react';

interface HandDrawnArrowProps {
  label?: string;
  direction?: 'down-right' | 'up-right' | 'curved-left' | 'loop' | 'horizontal-right';
  className?: string;
  color?: string;
  labelPosition?: 'top' | 'bottom' | 'side';
}

export const HandDrawnArrow: React.FC<HandDrawnArrowProps> = ({
  label,
  direction = 'down-right',
  className = '',
  color = 'var(--ink-primary)',
  labelPosition = 'top',
}) => {
  const renderArrowSvg = () => {
    switch (direction) {
      case 'down-right':
        return (
          <svg
            width="54"
            height="44"
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M3 5C14 4 35 11 43 28M43 28L34 26M43 28L47 18"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'up-right':
        return (
          <svg
            width="54"
            height="44"
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M4 38C12 36 34 29 44 12M44 12L36 12M44 12L46 22"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'loop':
        return (
          <svg
            width="64"
            height="48"
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M4 32C18 36 38 42 42 24C45 10 26 12 22 22C18 33 46 39 58 35M58 35L51 30M58 35L53 41"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'horizontal-right':
      default:
        return (
          <svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            <path
              d="M2 10C18 8.5 38 11.5 54 10M54 10L46 4M54 10L47 16"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`hand-drawn-arrow-container ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: labelPosition === 'top' ? 'column' : 'row',
        alignItems: 'center',
        gap: '0.25rem',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      {label && labelPosition === 'top' && (
        <span
          className="font-hand"
          style={{
            fontSize: '1.2rem',
            color: color,
            whiteSpace: 'nowrap',
            transform: 'rotate(-2deg)',
          }}
        >
          {label}
        </span>
      )}

      {renderArrowSvg()}

      {label && labelPosition !== 'top' && (
        <span
          className="font-hand"
          style={{
            fontSize: '1.2rem',
            color: color,
            whiteSpace: 'nowrap',
            transform: 'rotate(-2deg)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};
