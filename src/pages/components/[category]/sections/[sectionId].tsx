import { Navigation } from "@/pages";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ITabComponentsInfo } from "@/pages/components";
import cmpCategoriesInfo from "../../../../services/cmpCategoriesInfo.json";
import { CodeSandbox, GitHubIcon } from "@/components/SVGIcons/SVGIcons";
import Tooltip from "@/components/Utils/components/Tooltip";

export default function CmpDetailsPage(cmpInfo: ITabComponentsInfo) {
  const router = useRouter();
  const { category, sectionId } = router.query as { category: string; sectionId: string };
  const findCategory = cmpCategoriesInfo?.categories.find((c) => c.categoryKey === category) as ITabComponentsInfo;
  const findCmp = findCategory?.components.find((c) => c.sectionId === sectionId);

  return (
    <>
      <Head>
        <title>Hundred.dev | We are a team of Software craftsmen</title>
        <meta name='description' content='Hundred.dev | The Ultimate software development team' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navigation />
        <section id='cmp-detail-page' className='bg-[#1a1e21] pt-24 pb-16  '>
          <div className=' w-[1200px] mx-auto'>
            <div className='navigation flex flex-col'>
              <Link href={{ pathname: "/components", query: { category: category } }} className='mb-2'>
                <span className='text-xl text-gray-400  hover:text-[#fc8936]/[.8]'>{findCategory?.categoryName}</span>
              </Link>
              <span className='text-4xl text-gray-200'>{findCmp?.section}</span>
            </div>
            <div className='flex justify-between mt-14 mb-6 align-middle'>
              <div className='cmp-desc text-xl text-gray-300'>{findCmp?.desc}</div>
              <div className='cmp-source-link flex justify-center gap-3 align-middle'>
                <Tooltip message='GitHub Repository'>
                  <Link href='#'>
                    <GitHubIcon />
                  </Link>
                </Tooltip>
                <Tooltip message='Sandbox'>
                  <Link href='#'>
                    <CodeSandbox />
                  </Link>
                </Tooltip>
              </div>
            </div>
            <div className='preview-cmp rounded-xl h-auto overflow-hidden '>
              {/* <img src={findCmp?.imgUrl} alt='' className='w-full object-contain' /> */}
              <iframe
                src='https://codesandbox.io/embed/amazing-cdn-wgmkxk?fontsize=14&hidenavigation=1&theme=dark&view=preview'
                style={{ width: "100%", height: 800, border: 0, borderRadius: 4, overflow: "hidden" }}
                title='amazing-cdn-wgmkxk'
                allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// // Fetching data from the JSON file
// import fsPromises from "fs/promises";
// import path from "path";
// export async function getStaticPaths() {
//   const filePath = path.join( "../../../services/cmpCategoriesInfo.json");
//   const jsonData: any = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     cmpInfo: objectData,
//   };
// }
