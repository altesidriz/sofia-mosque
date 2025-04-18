import styles from './home.module.css';

import info1 from '../../assets/info1.jpg';
import info2 from '../../assets/info2.jpg';
import info3 from '../../assets/info3.jpg';
import Pdfs from '../../components/pdfs/Pdfs';


export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
            <h1>Banya Bashi - Mosque</h1>
            <p>The only functioning mosque in the city of Sofia and one of the few active buildings with over 450 years
                of history!</p>
            <p><a href="#">Short History</a></p>
        </section>
        <section className={styles.quote}>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
            <p>Are you not aware how God sets forth the parable of a good word? <span>[It is] like a good tree, firmly
                    rooted,
                    [reaching out] with its branches towards the sky,yielding its fruit at all times by its Sustainer&apos;s
                    leave.</span> And [thus it is that] God propounds parables unto men, so that they might bethink
                themselves [of
                the truth]. <span>(Qur&apos;an - Surah Ibrahim 14:24-25 )</span></p>
        </section>
        <section className={styles.moreInfo}>
            <div className={styles.cardList}>
                <div className={styles.card}>
                  <img src={info1} alt="more-info1"/>
                    <div className={styles.cardContent}>
                        <h4>Tourists <span>...know!</span></h4>
                        <ul type="disc">
                            <li>Islam shortly </li>
                            <li>History of the mosque </li>
                            <li>Architectural elements of the mosque </li>
                            <li>The mosque in the Islam </li>
                            <li>Panoramic pictures (360 degrees) </li>
                            <li>Gallery (wallpapers) </li>
                        </ul>
                        <a href="#">Tourists <i className="arrow right"></i></a>
                    </div>
                </div>
                <div className={styles.card}>
                  <img src={info2} alt="more-info2"/>
                    <div className={styles.cardContent}>
                        <h4>Explorers<span>...understand!</span></h4>
                        <ul type="disc">
                            <li>Short answers to important questions </li>
                            <li>Logic of faith</li>
                            <li>Oneness of God</li>
                            <li>Hereafter</li>
                            <li>Addresses in the Qur&apos;an to mankind</li>
                        </ul>
                        <a href="#">Explorers</a>
                    </div>
                </div>
                <div className={styles.card}>
                  <img src={info3} alt="more-info3"/>
                    <div className={styles.cardContent}>
                        <h4>Muslims<span>...know!</span></h4>
                        <ul type="disc">
                            <li>Information for muslim  community</li>
                            <li>Sermons</li>
                            <li>Charity campaigns</li>
                            <li>Addresses in the Qur&apos;an to beievers</li>
                            <li>Prayer times</li>
                        </ul>
                        <a href="#">Muslims</a>
                    </div>
                </div>
            </div>
        </section>
        <Pdfs />
    </div>
  );
}
