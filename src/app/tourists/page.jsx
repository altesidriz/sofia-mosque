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
                            <Link href="/">
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
                            <h4>Islam Shortly</h4>
                            <sapn>Short basic knowledge about the religion, and not about its media image.</sapn>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={selimiye} alt="world" />
                            <div className={styles.text}>
                            <h4>Islam Shortly</h4>
                            <span>Short basic knowledge about the religion, and not about its media image.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={bridge} alt="world" />
                            <div className={styles.text}>
                            <h4>Islam Shortly</h4>
                            <span>Short basic knowledge about the religion, and not about its media image.</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                    <div className={styles.card}>
                            <Image src={turn} alt="world" />
                            <div className={styles.text}>
                            <h4>Islam Shortly</h4>
                            <span>Short basic knowledge about the religion, and not about its media image.</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <Image src={rockFlower} alt="world" />
                            <div className={styles.text}>
                            <h4>Islam Shortly</h4>
                            <span>Short basic knowledge about the religion, and not about its media image.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tourists;