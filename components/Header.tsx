'use client'

import Image from 'next/image'
import logoBlack from '../public/logo_main_black.png'
import logoWhite from '../public/logo_main_white.png'
import Link from 'next/link'
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { usePathname } from 'next/navigation'
import ColoredLogo from './ColoredLogo';


export interface IHeaderProps extends HTMLAttributes<HTMLDivElement>  {
}

export default function Header (props: IHeaderProps) {
  const pathname = usePathname()
  console.log("🚀 ~ Header ~ pathname:", pathname)


  return (
    <div className={classNames('flex justify-center items-center text-20 font-light text-black_bg',
      {'bg-black_bg !text-White900': pathname==='/about'},
      {'bg-violet_bg': pathname==='/projects'},
      {'bg-gray_bg': pathname==='/publications'},
      // {'bg-gray_bg': pathname==='/blog'},
      props.className
     )}>
      <div className="flex flex-1 max-w-screen-xl px-2 py-[24px] items-center justify-between">
        <Link href="/">
          {pathname==='/about' ? <Image src={logoWhite} alt="Main Logo" /> : <Image src={logoBlack} alt="Main Logo" />}
        </Link>
        <div className='flex flex-row gap-[36px]'>
          <Link href="/about">
            <div className={classNames({'font-semibold':pathname==='/about'})}>About Me</div>
          </Link>
          <Link href="/projects">
            <div className={classNames({'font-semibold':pathname==='/projects'})}>Projects</div>
          </Link>
          <Link href="/publications">
            <div className={classNames({'font-semibold':pathname==='/publications'})}>Publications</div>
          </Link>
          <Link href='/blog'>
            <div className={classNames({'font-semibold':pathname==='/blog'})}>Blog</div>
          </Link>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
