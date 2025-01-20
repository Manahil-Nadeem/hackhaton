import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'icon' | 'default' | 'large'; // Add size prop
  variant?: 'ghost' | 'primary' | 'secondary'; // Add variant prop
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'default', // Default size
  variant = 'primary', // Default variant
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded';
  const sizeStyles = {
    default: 'px-4 py-2',
    icon: 'p-2',
    large: 'px-6 py-3',
  };
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};