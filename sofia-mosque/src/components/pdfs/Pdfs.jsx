import React from 'react';
import styles from './pdfs.module.css';

import AboutIslam from '../../assets/pdfs/AboutIslam.jpg';
import ProphetMuhammad from '../../assets/pdfs/ProphetMuhammad.jpg';
import OnenessOf_God_ from '../../assets/pdfs/OnenessOf_God_.jpg';
import Science from '../../assets/pdfs/Science.jpg';
import TheQuran from '../../assets/pdfs/TheQuran.jpg';
import WomensIslam from '../../assets/pdfs/WomensIslam.jpg';

const Pdfs = () => {
  return (
    <section className={styles.pdfs}>
            <h3>PDF-s on short knowledge about Islam</h3>
            <div className={styles.pdfList}>
                <img src={AboutIslam} alt="about-islam"/>
                <img src={ProphetMuhammad} alt="prophet-Muhammad"/>
                <img src={OnenessOf_God_} alt="onnes-of-God" />
                <img src={Science} alt="about-islam"/>
                <img src={TheQuran} alt="prophet-Muhammad"/>
                <img src={WomensIslam} alt="onnes-of-God" />
            </div>
        </section>
  );
};

export default Pdfs;