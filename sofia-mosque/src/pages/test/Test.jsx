import React from 'react';
import styles from './test.module.css'

const Test = () => {
    return (
        <div className={styles.container}>
            <div className={styles.honeycomb}>
                <div className={styles.row}>
                    <div className={styles.cell}>1</div>
                    <div className={styles.cell}>2</div>
                    <div className={styles.cell}>3</div>
                </div>
                <div className={`${styles.row} ${styles.staggered}`}>
                    <div className={styles.cell}>4</div>
                    <div className={styles.cell}>5</div>
                    <div className={styles.cell}>6</div>
                </div> <div class={styles.row}>
                    <div className={styles.cell}>7</div>
                    <div className={styles.cell}>8</div>
                    <div className={styles.cell}>9</div>
                </div>
            </div>
        </div>
    )
}

export default Test