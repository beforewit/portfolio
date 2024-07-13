import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import * as React from 'react';


export interface IExperienceProps {
  iconSrc: string | StaticImport
  title: string
  subTitle: string
  period: string
  periodLength: string
  details: React.ReactNode;
}

export default function Experience (props: IExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 border-[1px] px-6 md:px-7 py-7 md:py-10 border-gray_border rounded-lg border-solid">
      <div className="l flex flex-row text-white items-start">
        <div className="flex items-center gap-[30px]">
          <Image src={props.iconSrc} width={52} height={52} alt="LG logo"/>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-24">
              {props.title}
            </div>
            <div className="text-18 opacity-80">
              {props.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="r flex flex-col justify-end text-gray_desc2 md:text-right gap-2 md:gap-7">
        <div className="text-16 flex flex-col gap-1 text-white opacity-60">
          <div>
            {props.period}
          </div>
          <div>
            {props.periodLength}
          </div>
        </div>
        {props.details}
      </div>
    </div>
  );
}
