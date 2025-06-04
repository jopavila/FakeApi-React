import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function Button({ children, onClick, style, type = 'button', variant = 'primary' }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`button ${variant}`} style={style}>
      {children}
    </button>
  );
}