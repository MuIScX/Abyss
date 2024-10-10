import { useRef } from 'react';
import React, { useState } from 'react';
import Head from 'next/head';
import {
  Header,
  Sidebar,
  IntroductionIcon,
  ChallengeIcon,
  PerfectionIcon,
  FriedrichIcon,
  RelianceIcon,
} from '@/components';

import {
  PastIntroductionContext,
  PastChallengeContext,
  PastPerfectionContext,
  PastFriedrichContext,
  PastRelianceContext,
} from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap/dist/gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function tomorrow() {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

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
  const [activeIcon, setActiveIcon] = useState('Introduction');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div className=" flex min-h-screen flex-col">
      <Head>
        <title>Yesterday | Abyss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={main} className=" w-auto ">
        <Header />
        <div className="main-container overflow-y-auto">
          <div className=" space-x-100 flex min-h-screen flex-row  items-center">
            <div className="flex-start ml-28 mr-10 grid grid-flow-col grid-rows-5 flex-col gap-10">
              <a
                className={`col-span-2 my-0 place-self-start p-0 text-[5vh] opacity-50 duration-200 hover:opacity-100 ${
                  activeIcon === 'Introduction'
                    ? 'text-white opacity-100'
                    : 'text-zinc-400 opacity-50'
                }`}
                onClick={() => handleIconClick('Introduction')}
              >
                <IntroductionIcon />
              </a>
              <a
                className={`col-span-2 my-0 place-self-start p-0 text-[5vh] opacity-50 duration-200 hover:opacity-100 ${
                  activeIcon === 'Challenge'
                    ? 'text-white opacity-100'
                    : 'text-zinc-400 opacity-50'
                }`}
                onClick={() => handleIconClick('Challenge')}
              >
                <ChallengeIcon />
              </a>
              <a
                className={`col-span-2 my-0 place-self-start p-0 text-[5vh] opacity-50 duration-200 hover:opacity-100 ${
                  activeIcon === 'Perfection'
                    ? 'text-white opacity-100'
                    : 'text-zinc-400 opacity-50'
                }`}
                onClick={() => handleIconClick('Perfection')}
              >
                <PerfectionIcon />
              </a>
              <a
                className={`col-span-2 my-0 place-self-start p-0 text-[5vh] opacity-50 duration-200 hover:opacity-100 ${
                  activeIcon === 'Friedrich'
                    ? 'text-white opacity-100'
                    : 'text-zinc-400 opacity-50'
                }`}
                onClick={() => handleIconClick('Friedrich')}
              >
                <FriedrichIcon />
              </a>
              <a
                className={`col-span-2 my-0 place-self-start p-0 text-[5vh] opacity-50 duration-200 hover:opacity-100 ${
                  activeIcon === 'Reliance'
                    ? 'text-white opacity-100'
                    : 'text-zinc-400 opacity-50'
                }`}
                onClick={() => handleIconClick('Reliance')}
              >
                <RelianceIcon />
              </a>
            </div>
            {activeIcon === 'Introduction' && <PastIntroductionContext />}
            {activeIcon === 'Challenge' && <PastChallengeContext />}
            {activeIcon === 'Perfection' && <PastPerfectionContext />}
            {activeIcon === 'Friedrich' && <PastFriedrichContext />}
            {activeIcon === 'Reliance' && <PastRelianceContext />}
          </div>
        </div>
      </main>
    </div>
  );
}
