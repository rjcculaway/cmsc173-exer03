import Head from 'next/head';
import Navbar from '@/components/Navbar';
import MainPageContent from '@/components/MainPageContent';

import { productImageAtom } from 'atoms/productImageAtom';
import { useAtom } from 'jotai';

import styles from 'styles/Home.module.css';

export default function Home() {
  const [productImage, ] = useAtom(productImageAtom);
  return (
    <div className={styles.main_container}>
      <Head>
        <title>PLK-01</title>
        <meta name="description" content="Design for an e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main_content} style={{
        backgroundImage: `url(${productImage})`,
        objectFit: "cover",
        objectPosition: "right"
      }}>
        <MainPageContent />
      </div>
      <Navbar />
    </div>
  )
}
