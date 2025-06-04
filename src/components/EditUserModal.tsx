import React from 'react';
import Button from './Button';
import './EditUserModal.css';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (firstName: string, lastName: string, email: string) => void;
  onDelete: (id: number) => void;
  userId: number | null;
  initialFirstName: string;
  initialLastName: string;
  initialEmail: string;
}

export default function EditUserModal({ isOpen, onClose, onSave, onDelete, userId, initialFirstName, initialLastName, initialEmail }: EditUserModalProps) {
  const [firstName, setFirstName] = React.useState(initialFirstName);
  const [lastName, setLastName] = React.useState(initialLastName);
  const [email, setEmail] = React.useState(initialEmail);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(firstName, lastName, email);
  };

  const handleDelete = () => {
    if (userId !== null) {
      onDelete(userId);
      onClose(); // Fecha o modal após excluir
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Usuário</h2>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <div className="modal-buttons">
          <Button onClick={onClose} variant="secondary">Cancelar</Button>
          <Button onClick={handleDelete} variant="danger">Excluir</Button>
          <Button onClick={handleSave} variant="primary">Salvar</Button>
        </div>
      </div>
    </div>
  );
}