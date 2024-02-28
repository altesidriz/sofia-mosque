import Image from 'next/image';
import React from 'react';
import styles from './pdfs.module.css';

import AboutIslam from '../../../public/pdfs/AboutIslam.jpg';
import ProphetMuhammad from '../../../public/pdfs/ProphetMuhammad.jpg';
import OnenessOf_God_ from '../../../public/pdfs/OnenessOf_God_.jpg';
import Science from '../../../public/pdfs/Science.jpg';
import TheQuran from '../../../public/pdfs/TheQuran.jpg';
import WomensIslam from '../../../public/pdfs/WomensIslam.jpg';

const Pdfs = () => {
  return (
    <section className={styles.pdfs}>
            <h3>PDF-s on short knowledge about Islam</h3>
            <div className={styles.pdfList}>
                <Image src={AboutIslam} alt="about-islam"/>
                <Image src={ProphetMuhammad} alt="prophet-Muhammad"/>
                <Image src={OnenessOf_God_} alt="onnes-of-God" />
                <Image src={Science} alt="about-islam"/>
                <Image src={TheQuran} alt="prophet-Muhammad"/>
                <Image src={WomensIslam} alt="onnes-of-God" />
            </div>
        </section>
  );
};

export default Pdfs;