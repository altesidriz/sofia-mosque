import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from '../../assets/djamia-banya-bashi-sofia.jpg';

const linkData = [
  {
    id: 1,
    title: 'Tourists',
    url: '/tourists',
  },
  {
    id: 2,
    title: 'Explorers',
    url: '/explorers',
  },
  {
    id: 3,
    title: 'Muslims',
    url: '/muslims',
  },
  {
    id: 4,
    title: 'Contacts',
    url: '/contacts',
  },
  {
    id: 5,
    title: 'US',
    url: '/',
  },
  {
    id: 6,
    title: '360°',
    url: '/360',
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.siteHeader} ${isScrolled ? styles.solid : ''}`}>
      <div className={styles.leftContent}>
        <img src={Logo} alt="logo" />
        <p className={styles.siteTitle}>
          <a href="/">Banya Bashi</a>
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;