import { MENU_LIST } from '@/constants/values';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Hamburger from './components/Hamburger';
import MenuBg from './components/MenuBg';

export default function Header() {
  const [isOpenNavBar, setOpenNavBar] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(
    gsap.timeline({
      paused: true,
      ease: 'linear',
      onReverseComplete: () => handleNavBarToggleAni(false),
    })
  );

  const handleToggleNavBar = () => {
    setOpenNavBar(!isOpenNavBar);
  };

  const handleCloseNav = () => {
    setOpenNavBar(false);
  };

  const handleNavBarToggleAni = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const bgAni = () => {
    const tl = gsap.timeline();
    tl.fromTo('#nav', { top: '-100%' }, { top: '50%', duration: 2 });
    return tl;
  };

  const menuLogoAni = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      '#menuLogo',
      {
        opacity: 0,
        top: '-2px',
      },
      {
        opacity: 1,
        top: '0px',
        duration: 0.4,
      }
    );
    return tl;
  };
  const menuItemAni = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      'li',
      {
        opacity: 0,
        top: '-2px',
      },
      {
        stagger: {
          from: 'start',
          amount: 1,
        },
        opacity: 1,
        top: '0px',
      }
    );
    return tl;
  };
  useGSAP(
    () => {
      tl.current
        .add(bgAni())
        .add(menuLogoAni(), '-=0.8')
        .add(menuItemAni(), '-=0.4');
    },
    { scope: headerRef }
  );

  useEffect(() => {
    if (isOpenNavBar) {
      handleNavBarToggleAni(true);
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpenNavBar]);

  return (
    <header className='header layout' ref={headerRef}>
      <div className='header__inner'>
        <Link href='/'>MiaHsu</Link>
        <nav id='nav' className='navbar'>
          <MenuBg />
          <div className='navbar__main'>
            <div id='menuLogo' className='navbar__logo'>
              <div className='navbar__logo-img'>MiaHsu</div>
              <div className='navbar__logo-text'>
                WEB DEVELOP <br /> UI/UX DESIGN
              </div>
            </div>
            <ul className='navbar__list'>
              {MENU_LIST.map((item) => (
                <li className='navbar__list-item' key={item.label}>
                  <Link
                    href={item.router}
                    onClick={handleCloseNav}
                    target={item.target}
                  >
                    {item.label}
                    <span className='navbar__hidden'>
                      <span className='navbar__line'></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <Hamburger isOpen={isOpen} handleToggleNavBar={handleToggleNavBar} />
      </div>
    </header>
  );
}
