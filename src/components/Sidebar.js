import React from 'react';

function Sidebar({ active }) {
  return (
    <div className={`sidebar ${active ? 'active' : ''}`}>
      <div className="logo">
        <h2>TMPA</h2>
        <p>Port de Tanger Med</p>
      </div>
      <div className="user-info">
        <div className="user-avatar">A</div>
        <div>
          <div className="user-name">Admin</div>
          <div className="user-role">Superviseur</div>
        </div>
      </div>
      <div className="nav-menu">
        <div className="nav-title">Navigation</div>
        <div className="nav-item active">Tableau de bord</div>
        <div className="nav-item">Carte Interactive</div>
        <div className="nav-item">Opérations</div>
        <div className="nav-item">Rapports</div>
        <div className="nav-item">Paramètres</div>
      </div>
    </div>
  );
}

export default Sidebar;
