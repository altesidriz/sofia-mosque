import React from 'react';
import styles from './pillars.module.css';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import stones from '../../../../../public/tourists/islam-shortly/stones-rocks.jpg';
import Link from 'next/link';

const PillarsOfFaith = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.article}>
                    <div className={styles.image}>
                        <Image src={stones} alt='elif' />
                    </div>
                    <div className={styles.text}>
                        <h2>Pillars of faith</h2>
                        <ol>
                            <li> <b>Belief in the existence and oneness of Allah Almighty</b> - muslims believe in one, unique and incomparable, God, Who has no son or partner and no one has the right to serve anyone but Him alone.</li>
                            <li> <b>Faith in the melaike (angels) of the Almighty Allah.</b></li>
                            <li> <b>Faith in the books sent down by the Almighty Allah</b> - such as the Torah, the Psalms, the Gospel (in their original, unaltered form) and the Qur&apos;an.</li>
                            <li> <b>Faith in all the Prophets and Messengers of Allah Almighty</b>: from the first Adam, including Noah, Abraham, Ishmael, Isaac, Jacob, Moses, Jesus and the Last Prophet - Muhammad (peace be upon them all). They all came with the same message - to serve the Creator, not the creatures.</li>
                            <li> <b>Faith in the Day of Judgment.</b></li>
                            <li> <b>Belief in destiny</b> - both good and bad things were created by Allah. Nothing happens except through - His knowledge, His will and His power. <b>This does not mean that people do not have free will.</b> Rather, Allah has given them free will to choose between good and evil, and they are responsible for their choice. <b>(His knowledge and permission do not predetermine people&apos;s choices.)</b></li>
                        </ol>
                    </div>
                </div>
                <div className={styles.link}>
                    <Link href="/tourists/islam-shortly">ISLAM SHORTLY</Link>
                </div>
            </div>
        </div>
    );
};

export default PillarsOfFaith;