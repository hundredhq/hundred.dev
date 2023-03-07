import React, { FC, useEffect, useState } from "react";
import Checkbox from "./Utils/components/Checkbox";
import { useRouter } from "next/router";
import Link from "next/link";
import { IComponents, ITabComponentsInfo } from "@/pages/components";
import cmpCategoriesInfo from "../services/cmpCategoriesInfo.json";
import SampleGif from "../../public/gif/sample-gif.gif";

const ComponentCard: FC<IComponents> = ({ name, imgUrl, gifUrl, desc, tags, cmpId }) => {
  return (
    <div className='comp rounded-lg  h-72 m-2 bg-slate-400 relative cursor-pointer overflow-hidden ' key={cmpId}>
      <img src={"/gif/sample-gif.gif"} className='z-80 absolute top-0 left-0 w-full h-full' alt={name} />
      <img src={imgUrl} alt={name} className='z-100 absolute top-0 left-0 hover:hidden w-full h-full' />
      <div className='z-101 absolute h-28 bottom-0 left-0 w-full bg-gradient-to-t from-gray-700  '>
        <span className='text-gray-100 bottom-5 left-4 absolute'>{name}</span>
      </div>
    </div>
  );
};

export const SectionTabs: FC<{ categoryKey: string; onSelectTab: (categoryKey: string) => void }> = ({ categoryKey, onSelectTab }) => {
  return (
    <section style={{ zIndex: 999 }} className='p-4 px-20 bg-[#2b3135] border-b-gray-600 flex justify-center sticky z-999 top-0'>
      {cmpCategoriesInfo.categories.map((v, i) => {
        return (
          <span
            className={`px-5 py-2 rounded-md text-sm  hover:text-[#fc8936] text-gray-300 cursor-pointer ${
              categoryKey === v.categoryKey ? "text-[#fc8936] bg-gray-600" : ""
            }`}
            onClick={() => onSelectTab(v.categoryKey)}>
            {v.categoryName}
          </span>
        );
      })}
    </section>
  );
};

const ComponentsSection: FC = ({}) => {
  const [viewComponents, setViewCompoents] = useState<IComponents[]>(cmpCategoriesInfo.categories[0].components);
  const [categoryInfo, setCategoryInfo] = useState<ITabComponentsInfo>({
    categoryName: cmpCategoriesInfo.categories[0].categoryName,
    categoryKey: cmpCategoriesInfo.categories[0].categoryKey,
    desc: cmpCategoriesInfo.categories[0].desc,
    components: [],
  });

  const onSelectTab = (categoryKey: string) => {
    setCategoryInfo(cmpCategoriesInfo.categories.find((c) => c.categoryKey === categoryKey) as ITabComponentsInfo);
    setViewCompoents(cmpCategoriesInfo?.categories?.find((c) => c.categoryKey === categoryKey)?.components as any);
  };

  return (
    <section id={categoryInfo.categoryKey} className='absolute w-full bg-[#21232a]'>
      <SectionTabs onSelectTab={onSelectTab} categoryKey={categoryInfo.categoryKey} />

      <h2 className='px-20 text-4xl pt-20 mb-2 text-gray-200'>{categoryInfo.categoryName}</h2>
      <p className=' px-20 text-md text-gray-400 mb-10'>{categoryInfo.desc}</p>

      <div className='grid px-20 pb-16  grid-cols-3  gap-2 '>
        {viewComponents.length > 0 &&
          viewComponents.map((c) => {
            return <ComponentCard {...c} key={c.cmpId} />;
          })}
      </div>
    </section>
  );
};

export default ComponentsSection;
