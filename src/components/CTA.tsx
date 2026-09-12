import React from 'react';

interface CTAProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  arrow?: boolean;
}

export const CTA: React.FC<CTAProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  arrow = false,
}) => {
  const getPadding = () => {
    switch (size) {
      case 'sm':
        return '0.5rem 1.15rem';
      case 'lg':
        return '1.1rem 2.5rem';
      case 'md':
      default:
        return '0.85rem 1.85rem';
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return '0.875rem';
      case 'lg':
        return '1.15rem';
      case 'md':
      default:
        return '1rem';
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.65rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: getPadding(),
    fontSize: getFontSize(),
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
    textDecoration: 'none',
    boxSizing: 'border-box',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--ink-primary)',
      color: '#FAF8F4',
      border: '2px solid var(--ink-primary)',
      boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.3)',
    },
    secondary: {
      backgroundColor: 'var(--bg-paper-pure)',
      color: 'var(--ink-primary)',
      border: '2px solid var(--ink-primary)',
      boxShadow: '3px 4px 0px rgba(22, 22, 21, 0.9)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--ink-primary)',
      border: '2px dashed var(--ink-secondary)',
      boxShadow: 'none',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          style={{
            display: 'inline-block',
            transition: 'transform 0.2s ease',
          }}
          className="cta-arrow-icon"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`agency-cta-btn agency-cta-${variant} ${className}`}
        style={combinedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`agency-cta-btn agency-cta-${variant} ${className}`}
      style={combinedStyles}
    >
      {content}
    </button>
  );
};
