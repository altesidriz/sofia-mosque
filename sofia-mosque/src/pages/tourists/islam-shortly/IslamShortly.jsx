import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './islam.module.css';

import elif from '../../../assets/tourists/islam-shortly/elif.jpg';
import caligraph from '../../../assets/tourists/islam-shortly/caligraph.jpg';
import stones from '../../../assets/tourists/islam-shortly/stones.jpg';
import fundamentals from '../../../assets/tourists/islam-shortly/fundamentals.jpg';

import { useLang } from '../../../context/LanguageContext';

const IslamShortly = () => {
    const navigate = useNavigate();
    const { t } = useLang();

    const cardData = [
        {
            url: "/tourists/islam-shortly/oneness-of-God",
            coverImage: elif,
            titleKey: "islamShortly.cards.oneness",
        },
        {
            url: "/tourists/islam-shortly/about-Allah",
            coverImage: caligraph,
            titleKey: "islamShortly.cards.aboutAllah",
        },
        {
            url: "/tourists/islam-shortly/pillars-of-faith",
            coverImage: stones,
            titleKey: "islamShortly.cards.pillarsFaith",
        },
        {
            url: "/tourists/islam-shortly/pillars-of-Islam",
            coverImage: fundamentals,
            titleKey: "islamShortly.cards.pillarsIslam",
        },
    ];

    return (
        <div className={styles.container}>
            <h1>{t("islamShortly.title")}</h1>
            <div className={styles.cardWrapper}>
                {cardData.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <Link to={card.url}>
                            <img src={card.coverImage} alt={t(card.titleKey)} />
                        </Link>
                        <div className={styles.text}>
                            <h4>{t(card.titleKey)}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IslamShortly;
