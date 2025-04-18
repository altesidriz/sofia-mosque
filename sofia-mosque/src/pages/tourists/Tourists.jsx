
import React from 'react';
import styles from './tourists.module.css';

import world from '../../assets/tourists/world-harmony.jpg';
import banyabashi from '../../assets/tourists/banyabasi.jpg';
import selimiye from '../../assets/tourists/selimiye.jpg';
import bridge from '../../assets/tourists/bridge.jpg';
import turn from '../../assets/tourists/turn.jpg';
import rockFlower from '../../assets/tourists/rockFlower.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Tourists = () => {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate('/tourists/islam-shortly')
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Tourists ... know!</h1>
                <div className={styles.cardWrapper}>
                    <div className={styles.top}>
                        <div className={styles.card} onClick={handleNavigate}>
                                <img src={world} alt="world" />
                            <div className={styles.text}>
                                <h4>Islam Shortly</h4>
                                <span>Short basic knowledge about the religion, and not about its media img.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={banyabashi} alt="world" />
                            <div className={styles.text}>
                                <h4>History of mosque</h4>
                                <sapn>A short history of the mosque - Banya Bashi</sapn>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={selimiye} alt="world" />
                            <div className={styles.text}>
                                <h4>Arcitectural elements</h4>
                                <span>A brief description of the architectural elements in the mosques.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={bridge} alt="world" />
                            <div className={styles.text}>
                                <h4>Mosque in Islam</h4>
                                <span>About the meaning and place of the mosque in our religion.</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.card}>
                            <img src={turn} alt="world" />
                            <div className={styles.text}>
                                <h4>Panorama 360º</h4>
                                <span>360 degree pictures of the mosque - Banya Bash</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={rockFlower} alt="world" />
                            <div className={styles.text}>
                                <h4>Gallery</h4>
                                <span>Pictures with high quality from and of the mosque - Banya Bashi.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tourists;