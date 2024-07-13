'use client'

import Image from 'next/image'
import logoBlack from '../public/logo_main_black.png'
import logoWhite from '../public/logo_main_white.png'
import Link from 'next/link'
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer'


export interface IHeaderProps extends HTMLAttributes<HTMLDivElement>  {
}

export default function Header (props: IHeaderProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("🚀 ~ Header ~ pathname:", pathname)


  return (
    <div className={classNames('fixed flex justify-center w-screen z-50 items-center text-20 font-light text-black_bg',
      {'bg-black_bg !text-White900': pathname==='/about'},
      {'bg-violet_bg': pathname==='/projects'},
      {'bg-gray_bg': pathname==='/publications'},
      // {'bg-gray_bg': pathname==='/blog'},
      props.className
     )}>
      <div className="flex flex-1 max-w-screen-xl py-[24px] px-[32px] items-center justify-between">
        <Link href="/">
          {pathname==='/about' ? <Image src={logoWhite} alt="Main Logo" /> : <Image src={logoBlack} alt="Main Logo" />}
        </Link>
        <div className='hidden md:flex flex-row gap-[36px]'>
          <Link href="/about">
            <div className={classNames({'font-semibold':pathname==='/about'})}>About Me</div>
          </Link>
          <Link href="/projects">
            <div className={classNames({'font-semibold':pathname==='/projects'})}>Projects</div>
          </Link>
          <Link href="/publications">
            <div className={classNames({'font-semibold':pathname==='/publications'})}>Publications</div>
          </Link>
          {/* <Link href='/blog'>
            <div className={classNames({'font-semibold':pathname==='/blog'})}>Blog</div>
          </Link> */}
        </div>
        <div className='hidden md:flex'>
          <a href="https://bit.ly/43ruS0W" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <CloseIcon className={classNames("w-9 h-9 text-black_bg",
                { '!text-White900': pathname==='/about'},
              )}/>
            ) : (
              <MenuIcon className={classNames("w-9 h-9 text-black_bg",
                { '!text-violet_bg': pathname==='/about'},
              )} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black_bg text-violet_bg flex flex-col items-center justify-center z-50">
          <div className='flex flex-col h-screen justify-center gap-[125px]'>
            <div className='fixed top-4 right-4'>
              <button onClick={toggleMenu} className="focus:outline-none">
                <CloseIcon className={classNames("w-9 h-9 !text-violet_bg",
                      { '!text-violet_bg': pathname==='/about'},
                )} />
              </button>
            </div>
            <nav className="flex flex-col gap-9 items-center space-y-4">
              <Link href="/">
                <div className={classNames({'font-semibold':pathname==='/'})}>Space</div>
              </Link>
              <Link href="/about">
                <div className={classNames({'font-semibold':pathname==='/about'})}>About Me</div>
              </Link>
              <Link href="/projects">
                <div className={classNames({'font-semibold':pathname==='/projects'})}>Projects</div>
              </Link>
              <Link href="/publications">
                <div className={classNames({'font-semibold':pathname==='/publications'})}>Publications</div>
              </Link>
            </nav>
            <a href="https://bit.ly/43ruS0W" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </div>
          {/* <Footer/> */}
        </div>
      )}
    </div>
  );
}
