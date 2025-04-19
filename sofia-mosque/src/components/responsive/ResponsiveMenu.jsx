import React from 'react';
import { Link } from 'react-router-dom';
import styles from './responsiveMenu.module.css'; // Create this CSS file

const ResponsiveMenu = ({ isOpen, onClose, links, toggleLang, languageToggleText }) => {
  return (
    <div className={`${styles.responsiveMenuContainer} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>
        &times; {/* Close icon */}
      </button>
      <nav className={styles.mobileNav}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={onClose}>{link.title}</Link> {/* Close menu on link click */}
            </li>
          ))}
          <li onClick={() => { toggleLang(); onClose(); }} style={{ cursor: 'pointer' }}>
            {languageToggleText}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;