import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../../services/userService';
import './EditUserPage.css';

function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      loadUser(Number(id));
    }
  }, [id]);

  const loadUser = async (userId: number) => {
    setLoading(true);
    try {
      const user = await getUserById(userId);
      setFirstName(user.first_name);
      setLastName(user.last_name || ''); // Garante que last_name não seja undefined
      setEmail(user.email);
    } catch (err) {
      setError('Falha ao carregar usuário.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!id) return;
    try {
      await updateUser(Number(id), { first_name: firstName, last_name: lastName, email });
      navigate('/users');
    } catch (err) {
      setError('Erro ao salvar usuário.');
    }
  };

  if (loading) return <p>Carregando usuário...</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Usuário</h2>
        {error && <p className="error">{error}</p>}
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
          <button onClick={() => navigate('/users')}>Cancelar</button>
          <button onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;