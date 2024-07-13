import * as React from 'react';

export interface ISpecializedSkillProps {
  title: string;
  subTitle: string;
  description: string;
}

export default function SpecializedSkill (props: ISpecializedSkillProps) {
  return (
    <div id="ss1" className="flex flex-col gap-3" >
      <div className="flex flex-row gap-3 items-center py-1">
        <div className="font-bold text-24">
          {props.title}
        </div>
        <div className="text-20">
          {props.subTitle}
        </div>
      </div>
      <div className="text-12 text-gray_desc">
        {props.description}
      </div>
    </div>
  );
}
