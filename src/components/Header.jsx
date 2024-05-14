import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>SmartVest</div>
            <div className={styles.navbar}>
                <div className={styles.navlink}>Home</div>
                <div className={styles.navlink}>Category</div>
                <div className={styles.navlink}>Contact Us</div>
                <div className={styles.navlink}>About</div>
            </div>
        </div>
    )
}

export default Header