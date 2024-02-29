import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/navbar/Navbar';
import styles from './aboutAllah.module.css';
import caligraph from '../../../../../public/tourists/islam-shortly/Cool-Allah.jpg';

const AboutAllah = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.article}>
                    <div className={styles.image}>
                        <Image src={caligraph} alt='elif' />
                    </div>
                    <div className={styles.text}>
                        <h2>About Allah</h2>
                        <p><b>Allah</b> is the proper and personal name of the <b>One True God</b>.</p>
                        <p>The name “Allah” consists of two Arabic words: “al” and “ilah”. “Al” is the definite article, and “ilah” means “God”. When these two words are connected, they form “The God,” which means “the only God” or “the only true God.”</p>
                        <p>Nothing else can be called Allah. This word has neither a plural nor a gender. This shows its uniqueness, compared to the word “god”, which also has a plural (i.e. gods) or feminine (i.e. goddess)</p>
                        <ul>
                            <li>Allah has no partners, no equals and no rivals</li>
                            <li> Allah has no father, mother, sons, daughters or wives</li>
                            <li> Allah is worshipped directly without anyone or anything acting as an intermediary</li>
                            <li> Allah is not in need of anyone&apos;s worship</li>
                            <li> Allah is not answerable to anyone</li>
                            <li> Allah is not dependant on any person or thing, but all persons and things are dependant on Him</li>
                            <li>Allah created everything without any assistance</li>
                            <li> There is nothing above or comparable to Allah</li>
                            <li> There is nothing that exists except that it is completely subservient to Him</li>
                            <li> No one can withhold what Allah provides and no one can provide what Allah withholds</li>
                            <li> Allah alone can benefit or harm</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.link}>
                    <Link href="/tourists/islam-shortly">ISLAM SHORTLY</Link>
                </div>
            </div>

        </div>
    );
};

export default AboutAllah;