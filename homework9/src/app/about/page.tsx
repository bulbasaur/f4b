import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
};

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.h1}>About Page</h1>
        <p className={styles.p}>Go to <Link href="/" className="text-blue-600 hover:underline">Main</Link></p>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </main>
    </div>
  );
}