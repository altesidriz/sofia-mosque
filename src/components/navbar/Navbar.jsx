import Link from 'next/link';
import React from 'react';

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
    title: 'Contscts',
    url: '/contacts'
  }
];

const Navbar = () => {
  return (
    <div>
      <Link href='/'>BanyaBashi</Link>
      <div>
        {linkData.map(link=>(
          <Link href={link.url} key={link.id}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;