import styles from './home.module.css';
import info1 from '../../assets/info1.jpg';
import info2 from '../../assets/info2.jpg';
import info3 from '../../assets/info3.jpg';
import Pdfs from '../../components/pdfs/Pdfs';
import { useLang } from '../../context/LanguageContext';

export default function Home() {
  const { t } = useLang();

  const cards = [
    {
      image: info1,
      data: t('home.cards.tourists'),
      link: '/tourists'
    },
    {
      image: info2,
      data: t('home.cards.explorers'),
      link: '/explorers'
    },
    {
      image: info3,
      data: t('home.cards.muslims'),
      link: '/muslims'
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <h1>{t('home.banner.title')}</h1>
        <p>{t('home.banner.description')}</p>
        <p><a href="#">{t('home.banner.shortHistory')}</a></p>
      </section>

      <section className={styles.quote}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
        <p>
          {t('home.quote.text')} <span>{t('home.quote.span1')}</span> {t('home.quote.span2')} <span>{t('home.quote.source')}</span>
        </p>
      </section>

      <section className={styles.moreInfo}>
        <div className={styles.cardList}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.image} alt={`more-info${index + 1}`} />
              <div className={styles.cardContent}>
                <h4>{card.data.title}<span>{card.data.subtitle}</span></h4>
                <ul>
                  {card.data.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a href={card.link}>{card.data.link}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Pdfs />
    </div>
  );
}
