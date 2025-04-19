import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from '../../assets/djamia-banya-bashi-sofia.jpg';
import { useLang } from '../../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, toggleLang } = useLang();

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

  return (
    <div className={`${styles.siteHeader} ${isScrolled ? styles.solid : ''}`}>
      <div className={styles.leftContent}>
        <img src={Logo} alt="logo" />
        <p className={styles.siteTitle}>
          <a href="/">{t('navbar.siteTitle')}</a>
        </p>
      </div>
      <div className={styles.rightContent}>
        <nav>
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
      </div>
    </div>
  );
};

export default Navbar;
