import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="menu-item">SUPPLY CHAIN</div>
        <div className="menu-item active">USUÁRIOS</div>
      </aside>
      <main className="main-content">
        <header className="header">
          <h2>USUÁRIOS</h2>
          <button className="new-button">NOVO</button>
        </header>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;