import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './islam.module.css';

import elif from '../../../assets/tourists/islam-shortly/elif.jpg';
import caligraph from '../../../assets/tourists/islam-shortly/caligraph.jpg';
import stones from '../../../assets/tourists/islam-shortly/stones.jpg';
import fundamentals from '../../../assets/tourists/islam-shortly/fundamentals.jpg';

const IslamShortly = () => {
    const navigate = useNavigate();

    const cardData = [
        {
            url: "/tourists/islam-shortly/oneness-of-God",
            coverImage: elif,
            title: "Oneness of God in Islam",
        },
        {
            url: "/tourists/islam-shortly/about-Allah",
            coverImage: caligraph,
            title: "About Allah",
        },
        {
            url: "/tourists/islam-shortly/pillars-of-faith",
            coverImage: stones,
            title: "Pillars of Faith",
        },
        {
            url: "/tourists/islam-shortly/pillars-of-Islam", // Corrected URL to match the title
            coverImage: fundamentals,
            title: "Pillars of Islam",
        },
    ];

    return (
        <div className={styles.container}>
            <h1>Islam Shortly</h1>
            <div className={styles.cardWrapper}>
                {cardData.map((card, index) => (
                    <div key={index} className={styles.card}>
                         <Link to={card.url}>
                            <img src={card.coverImage} alt={card.title} />
                        </Link>
                        <div className={styles.text}>
                            <h4>{card.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IslamShortly;
