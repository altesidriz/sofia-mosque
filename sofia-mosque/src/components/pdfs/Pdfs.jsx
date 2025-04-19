import React from 'react';
import styles from './pdfs.module.css';

import AboutIslam from '../../assets/pdfs/AboutIslam.jpg';
import ProphetMuhammad from '../../assets/pdfs/ProphetMuhammad.jpg';
import OnenessOf_God_ from '../../assets/pdfs/OnenessOf_God_.jpg';
import Science from '../../assets/pdfs/Science.jpg';
import TheQuran from '../../assets/pdfs/TheQuran.jpg';
import WomensIslam from '../../assets/pdfs/WomensIslam.jpg';

import { useLang } from '../../context/LanguageContext'

const Pdfs = () => {
  const { t } = useLang();

  return (
    <section className={styles.pdfs}>
      <h3>{t('pdfs.pdfSectionTitle')}</h3>
      <div className={styles.pdfList}>
        <img src={AboutIslam} alt="about-islam"/>
        <img src={ProphetMuhammad} alt="prophet-Muhammad"/>
        <img src={OnenessOf_God_} alt="oneness-of-God" />
        <img src={Science} alt="science-and-faith"/>
        <img src={TheQuran} alt="the-Quran"/>
        <img src={WomensIslam} alt="women-in-Islam" />
      </div>
    </section>
  );
};

export default Pdfs;
