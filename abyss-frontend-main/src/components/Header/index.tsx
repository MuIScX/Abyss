import React, { useRef, useState } from 'react';
import { MainLogo } from '../Icons';
import gsap from 'gsap';
import { MenuButton } from '../MenuButton';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const logoRef = useRef(null);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onLogoEnter = () => {
    const currColor = logoRef.current.getAttribute('data-color');
    const logoSvg = logoRef.current.firstChild.firstChild;

    const nextColor =
      currColor === '#a6e2e3'
        ? '#8566f6'
        : currColor === '#8566f6'
        ? '#ed7c50'
        : '#a6e2e3';

    logoRef.current.setAttribute('data-color', nextColor);
    gsap.to(logoSvg, { fill: currColor, duration: 0.2, ease: 'power1.out' });
  };
  const onLogoLeave = () => {
    const logoSvg = logoRef.current.firstChild.firstChild;
    gsap.to(logoSvg, {
      fill: '#f5f4f5',
      duration: 0.2,
      ease: 'power1.out',
    });
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container  flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
          <MenuButton toggleDrawer={toggleDrawer}>Menu</MenuButton>
          <div
            className="header_logo pointer-event-auto cursor-pointer fill-[#f5f4f5] leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16 "
            data-color="#f5f4f5"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
            onClick={handleLogoClick}
          >
            <MainLogo />
          </div>
          <MenuButton>Cart</MenuButton>
        </div>
      </div>
      {/* Blur Overlay */}
      {/* Drawer Component */}
      <React.Fragment>
        <Drawer
          className="bg-black text-center"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="white">
              Abyss Logo Here
            </Typography>
            <IconButton variant="text" color="white" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            <Link href="/about-us">
              <ListItem className="text-white">About Us</ListItem>
            </Link>
            <Link href="/anonymous">
              <ListItem className="text-white">Anonymous</ListItem>
            </Link>
            <Link href="/authentication">
              <ListItem className="text-white">Authentication</ListItem>
            </Link>
            <Link href="/contact">
              <ListItem className="text-white">Contact</ListItem>
            </Link>
            <Link href="/feedback">
              <ListItem className="text-white">Feedback</ListItem>
            </Link>
          </List>
          <Button className="mt-3 ml-5" size="sm">
            Sign Up
          </Button>
        </Drawer>
      </React.Fragment>
    </div>
  );
};
