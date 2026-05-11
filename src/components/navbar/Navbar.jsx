import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">MonOrg</div>

      {/* BURGER */}
      <div
        className={`menu-icon ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <div className={`nav-items ${isOpen ? 'active' : ''}`}>

        {/* WHY US */}
        <div className={`dropdown ${openDropdown === 'why' ? 'expanded' : ''}`}>
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown('why');
              }
            }}
          >
            Pourquoi nous
          </a>

          <div className="dropdown-content">
            <a href="#Modele" onClick={closeAll}>Nos modèles</a>
            <a href="#Filieres" onClick={closeAll}>Nos filières</a>
            <a href="#Equipe" onClick={closeAll}>Équipe</a>
          </div>
        </div>

        {/* PARTNERS */}
        <div className={`dropdown ${openDropdown === 'partners' ? 'expanded' : ''}`}>
          <a
            href="#partners"
            className="nav-link"
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown('partners');
              }
            }}
          >
            Partenaires
          </a>

          <div className="dropdown-content">
            <a href="#mirab" onClick={closeAll}>ONG MIRAB</a>
            <a href="#partner2" onClick={closeAll}>Partenaire 2</a>
            <a href="#partner3" onClick={closeAll}>Partenaire 3</a>
          </div>
        </div>

        {/* BUTTON */}
        <a href="#contact" className="btn" onClick={closeAll}>
          Devenir partenaire
        </a>

      </div>
    </nav>
  );
};

export default Navbar;