import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from '../../assets/djamia-banya-bashi-sofia.jpg';
import { useLang } from '../../context/LanguageContext';
import ResponsiveMenu from '../responsive/ResponsiveMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLang } = useLang();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkData = [
    { id: 1, title: t('navbar.links.tourists'), url: '/tourists' },
    { id: 2, title: t('navbar.links.explorers'), url: '/explorers' },
    { id: 3, title: t('navbar.links.muslims'), url: '/muslims' },
    { id: 4, title: t('navbar.links.contacts'), url: '/contacts' },
    { id: 5, title: t('navbar.links.virtual'), url: '/360' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${styles.siteHeader} ${isScrolled ? styles.solid : ''}`}>
      <div className={styles.leftContent}>
        <img src={Logo} alt="logo" />
        <p className={styles.siteTitle}>
          <Link to="/">{t('navbar.siteTitle')}</Link>
        </p>
      </div>
      <div className={styles.rightContent}>
        <nav className={styles.desktopNav}> 
          <ul>
            {linkData.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
            <li onClick={toggleLang} style={{ cursor: 'pointer' }}>
              {t('navbar.languageToggle')}
            </li>
          </ul>
        </nav>
        <div className={styles.burgerMenu} onClick={toggleMobileMenu}> {/* Use a more descriptive class */}
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Render the ResponsiveMenu component */}
      <ResponsiveMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} links={linkData} toggleLang={toggleLang} languageToggleText={t('navbar.languageToggle')} />
    </div>
  );
};

export default Navbar;