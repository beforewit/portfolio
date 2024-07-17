import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import * as React from 'react';
import readMore from '../public/readMore.png'
import classNames from 'classnames';

export interface IProjectProps {
  imgSrc: string | StaticImport
  number: string
  title: React.ReactNode
  desc: string
  externalLink?: string
  reverse?: boolean
}

export default function Project (props: IProjectProps) {
  return (
    <div className={classNames("py-5 flex flex-col md:flex-row gap-10 ",{"md:flex-row-reverse": props.reverse})}>
      <div className="l flex-1 max-w-[768px]">
        <Image src={props.imgSrc} alt='project 1'/>
      </div>
      <div className="r flex flex-1 flex-col gap-7 text-white justify-center">
        <div className="font-extrabold text-24 md:text-48">{props.number}</div>
        <div className="font-bold text-20 md:text-32">{props.title}</div>
        <div className="text-16 text-gray_border">
          {props.desc}
        </div>
        {/* <a href={props.externalLink} target="_blank" rel="noopener noreferrer">
          <Image width={20} src={readMore} alt="readMore"/>
        </a> */}
      </div>
    </div>
  );
}
