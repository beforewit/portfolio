'use client'

import Image from 'next/image'
import logoBlack from '../public/logo_main_black.png'
import logoWhite from '../public/logo_main_white.png'
import logoViolet from '../public/logo_main_white.png'
import Link from 'next/link'
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { usePathname } from 'next/navigation'
import ColoredLogo from './ColoredLogo';


export interface IFooterProps extends HTMLAttributes<HTMLDivElement>  {
}

export default function Footer (props: IFooterProps) {
  const pathname = usePathname()
  console.log("🚀 ~ Footer ~ pathname:", pathname)


  return (
    <div className={classNames('flex w-full justify-center items-center text-16 font-light bg-black_bg text-violet_bg fixed bottom-0',
      // {'bg-black_bg !text-': pathname==='/about'},
      // {'bg-violet_bg': pathname==='/projects'},
      // {'bg-gray_bg': pathname==='/publications'},
      // {'bg-violet_bg': pathname==='/publications'},
      props.className
     )}>
      <div className="flex flex-1 max-w-screen-xl py-[24px] px-[32px] items-center justify-between">
        <Link href="/">
          {pathname==='/' && <Image src={logoViolet} alt="Main Logo" />}
          {pathname==='/about' && <Image src={logoWhite} alt="Main Logo" />}
        </Link>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            2024
          </a>
        </div>
      </div>
    </div>
  );
}
