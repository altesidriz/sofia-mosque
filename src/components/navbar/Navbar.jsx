import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.css';

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
  },
  {
    id: 5,
    title: 'US',
    url: '/'
  },
  {
    id: 6,
    title: '360°',
    url: '/'
  },
];

const Navbar = () => {
  return (
    <div>
      <div>
        <header className={styles.siteHeader}>
          <div className={styles.leftContent}>
            <Image  src="/djamia-banya-bashi-sofia.jpg" alt="logo" width={50} height={50}/>
            <p className={styles.siteTitle}><Link href='/'>Banya Bashi</Link></p>
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