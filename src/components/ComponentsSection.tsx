import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { IComponents, ITabComponentsInfo } from "@/pages/components";
import cmpCategoriesInfo from "../services/cmpCategoriesInfo.json";
import { useRouter } from "next/router";

const scrollTo = (id: string) => {
  let element = document.getElementById(id);
  let elementPosition: any = element?.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const ComponentCard: FC<IComponents> = ({ section, imgUrl, gifUrl, desc, tags, sectionId, category }) => {
  return (
    <Link href={`/components/${category}/sections/${sectionId}`}>
      <div className='cmp-card rounded-lg  h-80 m-2 bg-slate-400 relative cursor-pointer overflow-hidden ' key={sectionId}>
        <video
          width='100%'
          height='100%'
          poster={imgUrl}
          muted
          onMouseOver={(event: any) => event.target.play()}
          onMouseOut={(event: any) => event.target.load()}
          className='cmp-video z-80 absolute top-0 left-0  object-fill'>
          <source src={gifUrl} type='video/mp4' />
        </video>
        <div className='  z-101 absolute h-16 bottom-0 left-0 w-full bg-gradient-to-t from-gray-800 cmp-footer '>
          <span className='text-gray-100 bottom-5 left-4 absolute '>{section}</span>
        </div>
      </div>
    </Link>
  );
};

export const SectionTabs: FC<{ categoryKey: string; onSelectTab: (categoryKey: string) => void }> = ({ categoryKey, onSelectTab }) => {
  return (
    <section style={{ zIndex: 999 }} className=' p-4   bg-[#2b3135] border-b-gray-600 flex justify-center sticky z-999 top-0'>
      {cmpCategoriesInfo.categories.map((v, i) => {
        return (
          <span
            key={i}
            className={`px-5 py-2 rounded-md text-sm  hover:text-[#fc8936]  cursor-pointer ${
              categoryKey === v.categoryKey ? "text-[#fc8936] bg-gray-600" : "text-gray-300"
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
  const router = useRouter();
  const { category } = router.query as { category: string };
  const [viewComponents, setViewCompoents] = useState<IComponents[]>(cmpCategoriesInfo.categories[0].components);
  const [categoryInfo, setCategoryInfo] = useState<ITabComponentsInfo>({
    categoryName: cmpCategoriesInfo.categories[0].categoryName,
    categoryKey: cmpCategoriesInfo.categories[0].categoryKey,
    desc: cmpCategoriesInfo.categories[0].desc,
    components: [],
  });

  const onSelectTab = (categoryKey: string) => {
    const findCmp = cmpCategoriesInfo.categories.find((c) => c.categoryKey === categoryKey) as ITabComponentsInfo;
    setCategoryInfo(findCmp);
    setViewCompoents(findCmp.components);
  };

  useEffect(() => {
    if (category) {
      onSelectTab(category);
      scrollTo(category);
    }
  }, []);

  return (
    <section id={category ?? categoryInfo.categoryKey} className='components-section absolute w-full bg-[#21232a]'>
      <SectionTabs onSelectTab={onSelectTab} categoryKey={categoryInfo.categoryKey} />

      <h2 className='max-w-[1200px] mx-auto  px-6 text-4xl pt-20 mb-2 text-gray-200'>{categoryInfo.categoryName}</h2>
      <p className=' max-w-[1200px] mx-auto  px-6  text-md text-gray-400 mb-10'>{categoryInfo.desc}</p>

      <div className=' max-w-[1200px] mx-auto grid  pb-16  px-2  gap-4 grid-cols-1  md:grid-cols-1 lg:grid-cols-2 '>
        {viewComponents.length > 0 &&
          viewComponents.map((c) => {
            return <ComponentCard {...c} key={c.sectionId} category={categoryInfo.categoryKey} />;
          })}
      </div>
    </section>
  );
};

export default ComponentsSection;
