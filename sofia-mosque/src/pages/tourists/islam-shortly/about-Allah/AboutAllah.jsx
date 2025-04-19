import React from 'react';
import { Link } from 'react-router-dom';
import styles from './aboutAllah.module.css';
import caligraph from '../../../../assets/tourists/islam-shortly/Cool-Allah.jpg';

import { useLang } from '../../../../context/LanguageContext';

const AboutAllah = () => {
  const { t } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.image}>
            <img src={caligraph} alt="caligraph" />
          </div>
          <div className={styles.text}>
            <h2>{t("aboutAllah.title")}</h2>
            <p>
              <b>{t("aboutAllah.name")}</b> {t("aboutAllah.desc1")}
            </p>
            <p>{t("aboutAllah.desc2")}</p>
            <p>{t("aboutAllah.desc3")}</p>
            <ul>
              {t("aboutAllah.points", { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="/tourists/islam-shortly">{t("aboutAllah.backLink")}</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAllah;
