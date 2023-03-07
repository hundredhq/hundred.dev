import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FC, useState } from "react";
import { Navigation } from ".";
import ComponentsSection from "@/components/ComponentsSection";
import Link from "next/link";
import cmpCategoriesInfo from "../services/cmpCategoriesInfo.json";
export type categoryKeyType = "marketing" | "applicationUI" | "ecommerce";

export interface IComponents {
  name: string;
  cmpId: string;
  tags: string[];
  gifUrl: string;
  imgUrl: string;
  desc: string;
}
export interface ITabComponentsInfo {
  categoryName: string;
  categoryKey: string;
  desc: string;
  components: IComponents[];
}

export const HeroSection: FC = () => (
  <section id='components-hero-section' className='border-b-gray-300 pt-24 pb-6 px-20 bg-[#1a1e21] '>
    <div className='flex justify-between w-[1200px] mx-auto'>
      <div className='basis-2/4'>
        <h3 className='text-[#f1b0b0] mb-3 text-2xl'>By the founder of Torqbit</h3>
        <h1 className={`${styles.primary_text_gr} text-5xl basis-1/3 font-semibold leading-tight`}>
          Beautiful UI components, crafted with Tailwind CSS.
        </h1>

        <div className='flex flex-wrap mt-4'>
          <div className='flex items-center text-sm font-medium text-slate-500 '>
            <svg
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 flex-none stroke-current text-slate-400'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <ellipse cx='16' cy='16' rx='13' ry='5'></ellipse>
              <ellipse cx='16' cy='16' rx='13' ry='5' transform='rotate(60 16 16)'></ellipse>
              <ellipse rx='13' ry='5' transform='matrix(-.5 .86603 .86603 .5 16 16)'></ellipse>
              <circle cx='16' cy='16' r='2'></circle>
            </svg>
            <span className='ml-2.5'>React</span>
          </div>
          <div className='flex items-center text-sm font-medium text-slate-500 ml-6'>
            <svg
              fill='none'
              viewBox='0 0 256 256'
              className='h-8 w-8 flex-none stroke-current text-slate-400'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              preserveAspectRatio='xMidYMid'
              stroke='#84841a'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <g>
                  <path
                    d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
                    fill='#bababa'></path>
                </g>
              </g>
            </svg>
            <span className='ml-2.5'>NextJS</span>
          </div>
        </div>

        <p className='text-[#a6a6a7] text-lg mt-8 font-normal leading-8'>
          Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects
          and customize to your heart’s content.
        </p>
      </div>
      <div className={`basis-2/4`}></div>
    </div>
    <div className='w-[1200px] mx-auto'>
      <div className='relative z-20 sm:z-auto mt-16'>
        <div className='mx-auto max-w-container  pb-16 '>
          <div className='relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3'>
            <div className='flex'>
              <div className='p-0.5'>
                <svg
                  className='h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]'
                  viewBox='0 0 40 40'
                  fill='none'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <path
                    d='M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z'
                    className='fill-transparent stroke-[#fc8936]'></path>
                  <path
                    d='M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336'
                    className='stroke-[#fc8936]'></path>
                  <path
                    d='M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z'
                    className='stroke-[#fc8936]'></path>
                </svg>
              </div>
              <div className='ml-6'>
                <h2 className='text-sm font-semibold leading-6 text-gray-200'>500+ Components</h2>
                <p className='mt-2 text-sm leading-6 text-gray-400'>
                  Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='p-0.5'>
                <svg
                  className='h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]'
                  viewBox='0 0 40 40'
                  fill='none'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <path
                    d='M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z'
                    className='fill-transparent stroke-[#fc8936]'></path>
                  <path d='M22.25 11.75l-4.5 16.5' className='stroke-[#fc8936]'></path>
                  <path
                    d='M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5'
                    className='stroke-[#fc8936]'></path>
                </svg>
              </div>
              <div className='ml-6'>
                <h2 className='text-sm font-semibold leading-6 text-gray-200'>React and NextJS</h2>
                <p className='mt-2 text-sm leading-6 text-gray-400'>
                  Interactive examples for React and NextJS powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS
                  yourself.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='p-0.5'>
                <svg
                  className='h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]'
                  viewBox='0 0 40 40'
                  fill='none'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <path
                    d='M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z'
                    className='fill-transparent stroke-[#fc8936]'></path>
                  <path
                    d='M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5'
                    className='stroke-[#fc8936]'></path>
                  <path d='M31.5 8.5l-23 23' className='stroke-[#fc8936]'></path>
                  <path d='M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5' className='stroke-[#fc8936]'></path>
                </svg>
              </div>
              <div className='ml-6'>
                <h2 className='text-sm font-semibold leading-6 text-gray-200'>Fully Responsive</h2>
                <p className='mt-2 text-sm leading-6 text-gray-400'>
                  Every example is fully responsive and carefully designed and implemented to look great at any screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
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
        <HeroSection />
        <ComponentsSection />
      </main>
    </>
  );
}
