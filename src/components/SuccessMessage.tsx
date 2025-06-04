import React, { useEffect } from 'react';
import './SuccessMessage.css';

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

export default function SuccessMessage({ message, onClose }: SuccessMessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Fecha automaticamente após 3 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-overlay">
      <div className="success-content">
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}