import styles from './intro.module.css';

const Intro = () => {
    return (
    <div className={styles.rosterIntro}>
      <h2 id="rankings" class={styles.rosterTitle}>View The Latest News</h2>
      <p class={styles.rosterDescription}>Dive into the heart of the action by navigating through our extensive UFC roster section. Get to know every fighter on a personal level, from seasoned veterans to rising stars, with detailed profiles showcasing their achievements, fighting styles, and career highlights. Stay up-to-date with real-time statistics, fight records, and rankings to track the pulse of the UFC landscape.</p>
    </div>
    );
};

export default Intro;