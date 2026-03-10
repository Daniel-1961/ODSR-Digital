import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-gradient-to-r from-[#2a6d8c] to-[#041925] text-white hover:opacity-90 shadow-lg shadow-[#041925]/20',
  outline:
    'bg-transparent border-2 border-[#127EBA] text-[#127EBA] hover:bg-[#127EBA]/5',
  ghost:
    'bg-transparent text-[#127EBA] hover:bg-[#127EBA]/5',
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
