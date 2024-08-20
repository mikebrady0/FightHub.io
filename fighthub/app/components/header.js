import React from 'react';
import styles from './Header.module.css'; 
import link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><a id="fighthub" href="/">FightHub.io</a></li>
        <li><a href="/athletes">Athletes</a></li>
        <li><a href="/rankings">Rankings</a></li>
      </ul>
    </div>
  );
};

export default Header;
