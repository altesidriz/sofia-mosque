
import React from 'react';
import styles from './tourists.module.css';

import world from '../../assets/tourists/world-harmony.jpg';
import banyabashi from '../../assets/tourists/banyabasi.jpg';
import selimiye from '../../assets/tourists/selimiye.jpg';
import bridge from '../../assets/tourists/bridge.jpg';
import turn from '../../assets/tourists/turn.jpg';
import rockFlower from '../../assets/tourists/rockFlower.jpg';
import { Link, useNavigate } from 'react-router-dom';

import { useLang } from '../../context/LanguageContext';

const Tourists = () => {
    const navigate = useNavigate();
    const { t } = useLang();

    const handleNavigate = () => {
        navigate('/tourists/islam-shortly');
    };

    return (
        <div className={styles.container}>
            <h1>{t('tourists.title')}</h1>
            <div className={styles.cardWrapper}>
                <div className={styles.top}>
                    <div className={styles.card} onClick={handleNavigate}>
                        <img src={world} alt="world" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.islamShortly.title')}</h4>
                            <span>{t('tourists.cards.islamShortly.desc')}</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={banyabashi} alt="history" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.history.title')}</h4>
                            <span>{t('tourists.cards.history.desc')}</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={selimiye} alt="architecture" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.architecture.title')}</h4>
                            <span>{t('tourists.cards.architecture.desc')}</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={bridge} alt="mosqueInIslam" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.mosqueInIslam.title')}</h4>
                            <span>{t('tourists.cards.mosqueInIslam.desc')}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.card}>
                        <img src={turn} alt="panorama" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.panorama.title')}</h4>
                            <span>{t('tourists.cards.panorama.desc')}</span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={rockFlower} alt="gallery" />
                        <div className={styles.text}>
                            <h4>{t('tourists.cards.gallery.title')}</h4>
                            <span>{t('tourists.cards.gallery.desc')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourists;