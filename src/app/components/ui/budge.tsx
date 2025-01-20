import React from 'react';

type BadgeProps = {
  label: string;
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({ label, className }) => {
  return <span className={`badge ${className}`}>{label}</span>;
};