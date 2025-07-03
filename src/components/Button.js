import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  isFloating = false,
  className = '',
  to,
  ...props 
}) => {
  const baseClass = 'custom-button';
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const floatingClass = isFloating ? `${baseClass}--floating` : '';
  const allClasses = `${baseClass} ${variantClass} ${sizeClass} ${floatingClass} ${className}`;

  const content = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </>
  );

  return to ? (
    <Link to={to} className={allClasses} {...props}>
      {content}
    </Link>
  ) : (
    <button className={allClasses} {...props}>
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.node,
  isFloating: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string, // ← new prop
};

export default React.memo(Button);
