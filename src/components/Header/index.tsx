import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image 
          src="/images/logo.svg" 
          alt="ig.news" 
          width={80}
          height={80} 
        />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}