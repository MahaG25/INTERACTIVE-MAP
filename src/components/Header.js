import React from 'react';

function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
      <h1 className="page-title">Tableau de Bord des Flux Portuaires</h1>
    </div>
  );
}

export default Header;
