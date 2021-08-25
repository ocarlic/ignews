import Image from 'next/image';

import styles from './home.module.scss';

export default function Home() {
  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </section>

      <Image 
        src="/images/avatar.svg" 
        alt="Girl coding"
        width={80}
        height={80}
      />
    </main>
  )
}
