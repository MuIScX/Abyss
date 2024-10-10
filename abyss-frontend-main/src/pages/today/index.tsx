import { useRef } from 'react';
import Head from 'next/head';
import { Header } from '@/components';
import { ScrollDownIcon } from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap/dist/gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function today() {
  const main = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const texts = self.selector ? self.selector('.textbox') : [];

      gsap.fromTo(
        texts,
        { opacity: 0 }, // Initial state
        {
          opacity: 1, // Final state
          x: 0,
          ease: 'slow.inOut', // Animation ease
          stagger: 0.4, // Stagger start times by 0.4 seconds
          duration: 1,
          scrollTrigger: {
            trigger: texts,
            start: 'bottom 85%',
            end: 'top 45%',
            scrub: true,
          },
        }
      );
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <div className=" flex min-h-screen flex-col">
      <Head>
        <title>Today | Abyss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={main} className=" w-auto ">
        <Header />
        <div className="main-container overflow-y-auto">
          <div className="sectionscreen flex min-h-screen items-center justify-center  ">
            <div className="grid grid-flow-col  grid-rows-2 gap-0 ">
              <p className="hover:text-zinc-400 col-span-2 my-0 place-self-center p-0 text-[7vh] text-white duration-200">
                The Helios
              </p>
              <p className="hover:text-zinc-400 col-span-2 my-0 place-self-center p-0 text-[3vh] text-white duration-200">
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
