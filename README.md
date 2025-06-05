Projeto de Gestão de Usuários
Este é um projeto de teste desenvolvido para gerenciar usuários, incluindo funcionalidades de login, listagem, edição e exclusão de usuários. O projeto utiliza React, TypeScript, e uma API fake (ReqRes) para simulação de backend.
Requisitos

Node.js: Versão 16.x ou superior.
npm: Versão 6.x ou superior (ou yarn como alternativa).
Git: Para clonar o repositório.
Acesso à internet (para carregar a API fake e bibliotecas via CDN).

Estrutura do Projeto

src/pages/: Contém as páginas principais (Login, Lista de Usuários, etc.).
src/components/: Componentes reutilizáveis (Botões, Modais, etc.).
src/services/: Lógica de interação com a API.
src/types/: Definições de tipos TypeScript.
public/: Arquivos estáticos (ícones, etc.).

Instalação

Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:
npm install

Ou, se preferir usar yarn:
yarn install

Configure variáveis de ambiente (opcional):

Crie um arquivo .env na raiz do projeto com as seguintes variáveis, se necessário:REACT_APP_API_URL=https://reqres.in/api

Caso não configure, a aplicação usará a URL padrão da API fake diretamente no código.

Execução

Inicie o servidor de desenvolvimento:
npm start

Ou com yarn:
yarn start

Acesse a aplicação:

Abra o navegador e vá para http://localhost:3000.
A página de login será exibida. Use as credenciais padrão:
Usuário: eve.holt@reqres.in
Senha: cityslicka

Funcionalidades

Login: Autenticação básica com redirecionamento para a lista de usuários.
Lista de Usuários: Exibe uma tabela com nome, sobrenome, email, e opções de edição.
Edição de Usuários: Modal para editar nome, sobrenome e email, com botão "Excluir" vermelho para remover o usuário.
Exclusão: Confirmação via pop-up antes de excluir um usuário.
Mensagens de Sucesso: Pop-up estilizado após edições ou exclusões bem-sucedidas.

Comandos Úteis

Construir o projeto para produção:
npm run build

Gera uma versão otimizada na pasta build/.

Executar testes (se aplicável):
npm test

Nota: Este projeto não inclui testes unitários; adicione-os conforme necessário.

Analisar o tamanho do bundle:
npm run build -- --stats

Estrutura do Código

Componentes Principais:

Button.tsx: Componente global para botões com variantes (primary, secondary, danger).
EditUserModal.tsx: Modal para edição de usuários com opção de exclusão.
ConfirmDialog.tsx: Pop-up de confirmação para exclusão.
SuccessMessage.tsx: Pop-up para mensagens de sucesso.

Serviços:

userService.ts: Funções para interagir com a API fake (getUsers, updateUser, deleteUser).

Contribuição

Faça um fork do repositório.
Crie uma branch para suas alterações:git checkout -b feature/nova-funcionalidade

Commit suas mudanças:git commit -m "Descrição da mudança"

Envie para o repositório remoto:git push origin feature/nova-funcionalidade

Abra um pull request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
Agradecimentos
Agradecimentos ao suporte recebido durante o desenvolvimento, que ajudou a tornar o projeto mais robusto e estilizado!
