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

export default function Home() {
  const main = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const texts = self.selector ? self.selector('.textbox') : [];
      // const mainContainer = self.selector('.main-container');

      // // Initial background for main container
      // gsap.set(mainContainer, {
      //   backgroundImage: 'url(/bg/ferrari.jpg)',
      //   opacity: 1,
      // });

      // // Change background on scroll to the end
      // ScrollTrigger.create({
      //   trigger: mainContainer,
      //   start: 'top top',
      //   end: '70% bottom',
      //   onEnter: () => {
      //     gsap.to(mainContainer, {
      //       opacity: 0,
      //       duration: 1,
      //       onComplete: () => {
      //         gsap.set(mainContainer, {
      //           backgroundImage: 'url(/bg/warrenbuffet.jpg)',
      //         });
      //         gsap.to(mainContainer, { opacity: 1, duration: 1 });
      //       },
      //     });
      //   },
      //   onLeaveBack: () => {
      //     gsap.to(mainContainer, {
      //       opacity: 0,
      //       duration: 0.4,
      //       onComplete: () => {
      //         gsap.set(mainContainer, {
      //           backgroundImage: 'url(/bg/ferrari.jpg)',
      //         });
      //         gsap.to(mainContainer, { opacity: 1, duration: 0.5 });
      //       },
      //     });
      //   },
      //   markers: true, // Enable markers for debugging
      // });
      // Animate text on scroll
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
        <title>Abyss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={main} className=" w-auto ">
        <Header />
        <div className="main-container overflow-y-auto">
          <div className="landinglogo flex min-h-screen flex-col items-center justify-center px-20 pt-72 text-[7vh]">
            {/* <TextLogo /> */}
            <p className=" text-center text-[7vh]">Abyss</p>
            <motion.div
              className=" flex h-16 w-16 animate-pulse items-center justify-center pt-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ScrollDownIcon />
            </motion.div>
          </div>
          <div className="sectionscreen flex min-h-screen items-center justify-center px-20 text-[7vh]">
            <div className="flex space-x-10">
              <Link
                className="textbox hover:text-zinc-400 text-white duration-200"
                href="/yesterday"
              >
                Yesterday
              </Link>
              <p className="textbox text-zinc-400 font-serif">|</p>
              <Link
                className="textbox hover:text-zinc-400 text-white duration-200"
                href="/today"
              >
                Today
              </Link>
              <p className="textbox text-zinc-400">|</p>
              <Link
                className="textbox hover:text-zinc-400 text-white duration-200"
                href="/tomorrow"
              >
                Tomorrow
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
