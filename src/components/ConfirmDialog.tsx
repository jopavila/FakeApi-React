import React from 'react';
import Button from './Button';
import './ConfirmDialog.css';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="dialog-buttons">
          <Button onClick={onCancel} variant="secondary">Cancelar</Button>
          <Button onClick={onConfirm} variant="primary">Confirmar</Button>
        </div>
      </div>
    </div>
  );
}