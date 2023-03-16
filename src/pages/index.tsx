import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FC, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const Navigation: FC = () => {
  const [mobileLink, setMobileLink] = useState<boolean>(false);

  const closeMobileLink = () => {
    setMobileLink(false);
  };
  return (
    <header className='p-[15px]'>
      <Link href='/' className='p-0 '>
        <img src='/img/hundred-torq-light.svg' alt='' className='h-8' />
      </Link>
      <div className={`${styles.header_link} hidden md:block`}>
        {/* <Link href={{ pathname: "/components" }} className='text-[#a6a6a7]'>
          Components
        </Link>
        <Link href='/' className='text-[#a6a6a7] pr-5'>
          Our Work
        </Link> */}
        {/* <Link href='https://calendly.com/hundredlabs/20min'>Get Started</Link> */}
      </div>
      {/* <div
        className={`group space-y-2 md:hidden hamburger cursor-pointer ${mobileLink && "hidden"}`}
        onClick={() => setMobileLink(!mobileLink)}>
        <div className='w-8 h-0.5 bg-gray-300 group-hover:bg-white'></div>
        <div className='w-8 h-0.5 bg-gray-300 group-hover:bg-white'></div>
        <div className='w-8 h-0.5 bg-gray-300 group-hover:bg-white'></div>
      </div>
      <div
        className={`group space-y-2 md:hidden hamburger cursor-pointer ${!mobileLink && "hidden"}`}
        onClick={() => setMobileLink(!mobileLink)}>
        <div className='w-8 h-0.5 bg-gray-300 group-hover:bg-white origin-center rotate-45 translate-y-1'></div>
        <div className='w-8 h-0.5 bg-gray-300 group-hover:bg-white origin-center -rotate-45 -translate-y-1'></div>
      </div> */}
      <div className={`mobile-header-link hidden md:flex   ${mobileLink && "mobile-link-active"}`}>
        {/* <Link href={{ pathname: "/components" }} className='text-[#a6a6a7] hover:text-gray-300' onClick={closeMobileLink}>
          Components
        </Link> */}

        {/* <Link href='https://calendly.com/hundredlabs/20min' className='menu-getstart-btn' onClick={closeMobileLink}>
          Get Started
        </Link> */}
      </div>
    </header>
  );
};

const HeroSection: FC = () => (
  <section className={styles.hero_section}>
    <div>
      <h1 className='mb-5'>
        100% dedicated developers
        <br /> for your startup
      </h1>
      <p className='mb-5'>
        Get a remote development team that can work blazing fast, <br /> at the fraction of cost of a full time employee
      </p>
      <Link href='https://calendly.com/hundredlabs/20min' className='menu-getstart-btn'>
        Get Started
      </Link>
    </div>
  </section>
);

const ToolsSection: FC = () => (
  <section className={`${styles.tools_section} py-24 px-10`}>
    <img src='img/coder-illustration.png' alt='' />
    <h2 className=' mt-8 lg:mt-12 mb-1'>We are passionate about the latest tools</h2>
    <p className='mb-14 lg:mb-20'>used by next-gen startups and enterprises</p>
    <div className={styles.tools}>
      <img src='img/icon-react.png' alt='' />
      <img src='img/nextjs.png' alt='' />
      <img src='img/icon-gcp.png' alt='' />
      <img src='img/aws.png' alt='' />
      <img src='img/icon-k8s.png' alt='' />
      <img src='img/docker.png' alt='' />
      <img src='img/nodejs.png' alt='' />
      <img src='img/mysql.png' alt='' />
      <img src='img/vercel.png' alt='' />
      <img src='img/sass.png' alt='' />
    </div>
  </section>
);

const AboutSection: FC = () => (
  <section className={styles.about_section}>
    <div>
      <h2 className='mb-4'>About Us</h2>
      <p className='mb-3'>
        We are small town full stack developers, based out of coal city of India. We have worked in both established giants and on our own
        startups.{" "}
      </p>

      <p>We are extremely goal driven, and determined to help startups scale without burning a hole in your pocket.</p>
    </div>

    <div>
      <div>
        <img src='img/people.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          We are always <br /> available for your <br /> success
        </p>
      </div>
      <div>
        <img src='img/network.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          We are passionate <br /> about solving <br />
          complex problems
        </p>
      </div>
      <div>
        <img src='img/organisms.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          We work in distributed
          <br /> teams with leaser-like <br /> focus
        </p>
      </div>
      <div>
        <img src='img/trust.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          We build trust with <br /> our quality of work
        </p>
      </div>
      <div>
        <img src='img/sofa.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          We are flexible when it <br /> comes to working with <br /> different timezones
        </p>
      </div>
      <div>
        <img src='img/home-office.png' alt='' />
        <hr />
        <p className='p-[10px]'>
          Our office has all what <br /> it takes to deliver on <br /> time
        </p>
      </div>
    </div>
  </section>
);

const FooterSection: FC = () => (
  <section className={styles.footer_section}>
    <div>
      <h2>Its time to scale your engineering team</h2>
      <p>
        Start working with us and pay only when you <br />
        truly believe that we can make difference
      </p>
      <Link href={"https://calendly.com/hundredlabs/20min"} className={styles.btn_connect}>
        <span>Let&apos;s Connect</span>
        <span>&rarr;</span>
      </Link>
    </div>
    <div className={styles.footer_links}>
      <div>
        <h2 className='text-primary-gradient'>Company</h2>

        <a href=''>About</a>

        <a href=''>Blog</a>

        <a href=''>Careers</a>

        <a href=''>Contact</a>
      </div>
      <div>
        <h2 className='text-primary-gradient'>Legal</h2>

        <a href=''>Term & Conditions</a>
        <a href=''>Refund Policy</a>
        <a href=''>Privacy & Policy</a>
      </div>
      <div>
        <h2 className='text-primary-gradient'>Our Work</h2>
        <a href=''>Components</a>
        <a href=''>Templates</a>
      </div>
      <div>
        <h2 className='text-primary-gradient'>HUNDRED.DEV</h2>
        <p className='text-[#a6a6a7]'>
          A team of passionate developers <br /> who build high quality software
          <br />
          products
        </p>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
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
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <main>
        <Navigation />
        <HeroSection />
        <ToolsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
}
