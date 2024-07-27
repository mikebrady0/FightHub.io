import React from 'react';
import styles from './Footer.module.css'; 


const Footer = () => {
  return (
    <footer>
      <div className={styles.bottomBar}>
        <div className={styles.eventTitle}>
          <h6 id="event-title">upcoming events :</h6>
        </div>
        <div className={styles.events}>
          <a href="https://www.espn.com/mma/fightcenter/_/id/600045073/league/ufc" className={styles.event}>UFC 304 07/27/24</a>
          <a href="http://www.ufcstats.com/event-details/fe435e440b5de0ff" className={styles.event}>UFC ON ABC 08/03/24 </a>
          <a href="http://www.ufcstats.com/event-details/2c733e059462c1dc" className={styles.event}>UFC Fight Night 08/10/24</a>
          <a href="http://www.ufcstats.com/event-details/32ba186f4b0e3267" className={styles.event}>UFC 305 08/17/24</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
