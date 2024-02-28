import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './tourists.module.css';
import Image from 'next/image';

import world from '../../../public/tourists/world-harmony.jpg';
import banyabashi from '../../../public/tourists/banyabasi.jpg';
import selimiye from '../../../public/tourists/selimiye.jpg';
import bridge from '../../../public/tourists/bridge.jpg';
import turn from '../../../public/tourists/turn.jpg';
import rockFlower from '../../../public/tourists/rockFlower.jpg';
import Link from 'next/link';

const Tourists = () => {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <h1>Tourists ... know!</h1>
                <div className={styles.cardWrapper}>
                    <div className={styles.top}>
                        <div className={styles.card}>
                            <Link href="/tourists/islam-shortly">
                                <Image src={world} alt="world" />
                            </Link>
                            <div className={styles.text}>
                                <h4>Islam Shortly</h4>
                                <span>Short basic knowledge about the religion, and not about its media image.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={banyabashi} alt="world" />
                            <div className={styles.text}>
                                <h4>History of mosque</h4>
                                <sapn>A short history of the mosque - Banya Bashi</sapn>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={selimiye} alt="world" />
                            <div className={styles.text}>
                                <h4>Arcitectural elements</h4>
                                <span>A brief description of the architectural elements in the mosques.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={bridge} alt="world" />
                            <div className={styles.text}>
                                <h4>Mosque in Islam</h4>
                                <span>About the meaning and place of the mosque in our religion.</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.card}>
                            <Image src={turn} alt="world" />
                            <div className={styles.text}>
                                <h4>Panorama 360º</h4>
                                <span>360 degree pictures of the mosque - Banya Bash</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={rockFlower} alt="world" />
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