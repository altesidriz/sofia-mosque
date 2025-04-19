import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pillars.module.css';
import stones from '../../../../assets/tourists/islam-shortly/stones-rocks.jpg';

import { useLang } from '../../../../context/LanguageContext';

const PillarsOfFaith = () => {
  const { t } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.image}>
            <img src={stones} alt="stones" />
          </div>
          <div className={styles.text}>
            <h2>{t("faith.title")}</h2>
            <ol>
              {t("faith.points", { returnObjects: true }).map((point, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ol>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="/tourists/islam-shortly">{t("faith.backLink")}</Link>
        </div>
      </div>
    </div>
  );
};

export default PillarsOfFaith;
