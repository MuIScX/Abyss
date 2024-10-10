import React, { useState } from 'react';
import {
  IntroductionIcon,
  ChallengeIcon,
  PerfectionIcon,
  FriedrichIcon,
  RelianceIcon,
} from '../Icons';

export const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };

  return (
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
  );
};
