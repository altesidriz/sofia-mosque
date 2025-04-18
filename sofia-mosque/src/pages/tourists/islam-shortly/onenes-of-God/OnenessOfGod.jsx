import React from 'react';
import { Link } from 'react-router-dom';
import styles from './oneness.module.css'; 
import elif from '../../../../assets/tourists/islam-shortly/elif.jpg';

const Oneness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.image}>
            <img src={elif} alt="elif" />
          </div>
          <div className={styles.text}>
            <h2>Oneness of God</h2>
            <p>
              Faith and worship of the <b>One True God</b> is a fundamental
              element in the religion of Muslims. Many other religions also claim
              to believe in One God, yet they attribute partners to Him. Here are
              some examples of association:
            </p>
            <ul>
              <li>
                Worship or ask for forgiveness from God through one of His
                creations
              </li>
              <li>Giving some of God's qualities to objects or human beings</li>
              <li>
                Making imitations of Allah by erecting something that opposes
                Him
              </li>
            </ul>
            <p>
              The above beliefs or actions are completely contrary to the basic
              principles of Islam.
            </p>
            <p>
              <b>The belief in the absolute Oneness of God is the essence of Islam.</b> It is the
              foundation of all other principles, beliefs and precepts in Islam.
              <b>Without it, everything else in religion loses its meaning.</b>
            </p>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="/tourists/islam-shortly">ISLAM SHORTLY</Link>
        </div>
      </div>
    </div>
  );
};

export default Oneness;
