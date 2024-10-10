import React, { ReactNode } from 'react';

interface MenuButtonProps {
  children: ReactNode;
  toggleDrawer: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  toggleDrawer,
}) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-2xl uppercase leading-6 text-white">
      <button onClick={toggleDrawer}>
        <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
          {children}
        </span>
        <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
          {children}
        </span>
      </button>
    </div>
  );
};
