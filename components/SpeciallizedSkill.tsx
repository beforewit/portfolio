import * as React from 'react';

export interface ISpecializedSkillProps {
  title: string;
  subTitle: string;
  description: string;
}

export default function SpecializedSkill (props: ISpecializedSkillProps) {
  return (
    <div id="ss1" className="flex flex-col gap-3" >
      <div className="flex flex-col gap-3 items-center md:items-start py-1">
        <div className="font-bold text-24">
          {props.title}
        </div>
        <div className="flex text-18 items-center md:items-start text-center md:text-left">
          {props.subTitle}
        </div>
      </div>
      <div className="text-12 text-gray_desc text-justify md:text-left">
        {props.description}
      </div>
    </div>
  );
}
