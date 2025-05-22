import styles from './pdfs.module.css';
import { storage, ref, getDownloadURL } from '../../firebase/firebase.js';

import AboutIslam from '../../assets/pdfs/AboutIslam.jpg';
import ProphetMuhammad from '../../assets/pdfs/ProphetMuhammad.jpg';
import OnenessOf_God_ from '../../assets/pdfs/OnenessOf_God_.jpg';
import Science from '../../assets/pdfs/Science.jpg';
import TheQuran from '../../assets/pdfs/TheQuran.jpg';
import WomensIslam from '../../assets/pdfs/WomensIslam.jpg';
import PurposeOfLife from '../../assets/pdfs/Purpose-of-life.png';

import { useLang } from '../../context/LanguageContext'

const Pdfs = () => {
  const { t } = useLang();

  const handleLink = async () => {
    try {
        const pdfRef = ref(storage, 'sofiamosque/The_purpose_of_life.pdf'); // Adjust the path in storage
        const pdfUrl = await getDownloadURL(pdfRef);
        window.open(pdfUrl, '_blank');
    } catch (error) {
        console.error('Error getting PDF URL:', error);
        // Handle error (e.g., show an error message to the user)
    }
};

  return (
    <section className={styles.pdfs}>
      <h3>{t('pdfs.pdfSectionTitle')}</h3>
      <div className={styles.pdfList}>
        <img src={PurposeOfLife} alt="purpose-of-life" onClick={handleLink}/>
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
