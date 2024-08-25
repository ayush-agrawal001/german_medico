import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader}></div>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
};

export default Skeleton;