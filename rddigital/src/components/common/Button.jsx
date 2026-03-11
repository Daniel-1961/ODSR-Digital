import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary-dark text-white hover:bg-primary-darker shadow-lg shadow-primary-dark/20',
  outline:
    'bg-transparent border-2 border-primary-dark text-primary-dark hover:bg-primary-dark/5',
  ghost:
    'bg-transparent text-primary-dark hover:bg-primary-dark/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-btn
    transition-all duration-300 cursor-pointer
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `.trim();

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
