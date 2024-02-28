import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';

const linkData = [
  {
    id: 1,
    title: 'Tourists',
    url: '/tourists'
  },
  {
    id: 2,
    title: 'Explorers',
    url: '/explorers'
  },
  {
    id: 3,
    title: 'Muslims',
    url: '/muslims'
  },
  {
    id: 4,
    title: 'Contacts',
    url: '/contacts'
  }
];

const Navbar = () => {
  return (
    <div>
      <div>
        <header className={styles.siteHeader}>
          <div className={styles.leftContent}>
            <Image  src="/djamia-banya-bashi-sofia.jpg" alt="logo" width={50} height={50}/>
            <p className={styles.siteTitle}><Link href='/'>BanyaBashi</Link></p>
          </div>
          <div className={styles.rightContent}>
            <nav>
              <ul>
                {linkData.map(link => (
                  <li key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;