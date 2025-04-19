import React from 'react';
import { Link } from 'react-router-dom';
import styles from './oneness.module.css';
import elif from '../../../../assets/tourists/islam-shortly/elif.jpg';

import { useLang } from '../../../../context/LanguageContext';

const Oneness = () => {
  const { t } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.image}>
            <img src={elif} alt="elif" />
          </div>
          <div className={styles.text}>
            <h2>{t("oneness.title")}</h2>
            <p>
              {t("oneness.intro1")} <b>{t("oneness.oneTrueGod")}</b> {t("oneness.intro2")}
            </p>
            <p>{t("oneness.intro3")}</p>
            <ul>
              {t("oneness.examples", { returnObjects: true }).map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
            <p>{t("oneness.conclusion1")}</p>
            <p>
              <b>{t("oneness.final1")}</b> {t("oneness.final2")} <b>{t("oneness.final3")}</b>
            </p>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="/tourists/islam-shortly">{t("oneness.backLink")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Oneness;
