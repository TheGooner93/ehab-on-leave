import styles from './page.module.scss'

import { getStatusText } from '@/utils/text'

export default function Home() {

  const renderHeadingSection = () => (
    <section className={styles.headingSection}>
      <div className={styles.hero}>
        <h1>Hello</h1>
        <span className={styles.emoji}>👋🏼</span>
      </div>
      <div className={styles.status}>
        <h2>Ehab is {getStatusText()}</h2>
      </div>
    </section>
  );

  const renderPOCSection = () => (
    <section className={styles.pocSection}>
      <h2>Here are some points of contact in his absence:</h2>
    </section>
  )

  return (
    <main className={styles.main}>
      {renderHeadingSection()}
      {renderPOCSection()}
    </main>
  )
}
