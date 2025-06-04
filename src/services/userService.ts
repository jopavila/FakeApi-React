import { api } from './api';

export const getUsers = async () => {
  const response = await api.get('/users?page=1&per_page=5');
  return response.data.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/users/${id}`);
};

export const updateUser = async (id: number, userData: { first_name: string; last_name: string; email: string }) => {
  const response = await api.put(`/users/${id}`, userData);
  // Simula a resposta da API com os dados atualizados (ReqRes não retorna o usuário atualizado)
  return {
    id,
    ...userData,
  };
};

export const getUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};