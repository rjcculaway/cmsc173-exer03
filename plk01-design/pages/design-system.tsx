import Head from 'next/head';
import Navbar from '@/components/Navbar';
import DesignSystemContent from '@/components/DesignSystemContent';

import styles from 'styles/Home.module.css';

const DesignSystemPage: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>PLK-01 — Design System</title>
        <meta name="description" content="Design for an e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.design_system_content}>
        <DesignSystemContent />
      </div>
      <Navbar />
    </div>
  );
}

export default DesignSystemPage;
