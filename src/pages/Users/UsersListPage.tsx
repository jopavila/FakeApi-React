import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, deleteUser, updateUser } from '../../services/userService';
import EditUserModal from '../../components/EditUserModal';
import SuccessMessage from '../../components/SuccessMessage';
import Button from '../../components/Button';
import type { User } from '../../types/User';
import './UsersListPage.css';

function UsersListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getUsers();
      setUsers(data);
    } catch {
      setError('Erro ao carregar usuários.');
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (user: User) => {
    console.log('Abrindo modal de edição para:', user);
    setEditingUser(user);
    setEditOpen(true);
  };

  const handleCancel = () => {
    console.log('Cancelando modal');
    setEditOpen(false);
    setEditingUser(null);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
      console.log('Exclusão bem-sucedida');
      setSuccessMessage('Usuário excluído com sucesso!');
    } catch {
      console.log('Erro na exclusão');
      setSuccessMessage('Erro ao excluir o usuário. Tente novamente.');
    }
  };

  const handleSaveEdit = async (firstName: string, lastName: string, email: string) => {
    if (!editingUser) return;
    try {
      const updatedUser = await updateUser(editingUser.id, { first_name: firstName, last_name: lastName, email });
      setUsers(prev => prev.map(user => user.id === editingUser.id ? { ...user, ...updatedUser } : user));
      console.log('Edição bem-sucedida');
      setSuccessMessage('Usuário editado com sucesso!');
    } catch {
      console.log('Erro na edição');
      setSuccessMessage('Erro ao editar o usuário. Tente novamente.');
    } finally {
      setEditOpen(false);
      setEditingUser(null);
    }
  };

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <Button onClick={() => openEditModal(user)} variant="secondary">Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        Linhas por página: <select><option>10</option></select> 1-5 de 13 <button>◄</button> <button>►</button>
      </div>
      <EditUserModal
        isOpen={editOpen}
        onClose={handleCancel}
        onSave={handleSaveEdit}
        onDelete={handleDelete}
        userId={editingUser?.id || null}
        initialFirstName={editingUser?.first_name || ''}
        initialLastName={editingUser?.last_name || ''}
        initialEmail={editingUser?.email || ''}
      />
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}
    </div>
  );
}

export default UsersListPage;