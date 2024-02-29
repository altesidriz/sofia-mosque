import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './islam.module.css';
import Navbar from '@/components/navbar/Navbar';

import elif from '../../../../public/tourists/islam-shortly/elif.jpg';
import caligraph from '../../../../public/tourists/islam-shortly/caligraph.jpg';
import stones from '../../../../public/tourists/islam-shortly/stones.jpg';
import fundamentals from '../../../../public/tourists/islam-shortly/fundamentals.jpg';


const IslamShortly = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1>Islam Shortly</h1>
            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <Link href="/tourists/islam-shortly/onenes-of-God">
                        <Image src={elif} alt="elif" />
                    </Link>
                    <div className={styles.text}>
                        <h4>Onenes of God in Islam</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <Link href="/tourists/islam-shortly/about-Allah">
                        <Image src={caligraph} alt="caligraph" />
                    </Link>
                    <div className={styles.text}>
                        <h4>About Allah</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <Link href="/tourists/islam-shortly/pillars-of-faith">
                        <Image src={stones} alt="stones" />
                    </Link>
                    <div className={styles.text}>
                        <h4>Pillars of Faith</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={fundamentals} alt="fundamentals" />
                    <div className={styles.text}>
                        <h4>Pillars of Islam</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IslamShortly;