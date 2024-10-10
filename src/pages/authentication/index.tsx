import Head from 'next/head';
import { Header } from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap/dist/gsap';

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col">
      <Head>
        <title>Authentication | Abyss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div className="main-container overflow-y-auto">
          <div className="flex min-h-screen flex-col items-center justify-center px-72 "></div>
        </div>
      </main>
    </div>
  );
}
