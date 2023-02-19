import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FC } from 'react'

const inter = Inter({ subsets: ['latin'] })

const HeroSection: FC = () => (
  <section className={styles.section_hero}>
    <h1 className={styles.heading}>The 100% commited developers</h1>
    <h3 className={styles.sub_heading}>Build your Dev Tools startup with us</h3>
    <img src="/coders.png" alt="" />
  </section>
)

const ToolsSection: FC = () => (
  <section className={styles.section_tools}>
    <h1 className={styles.heading}>We are passionate about the latest tools</h1>
    <h3 className={styles.sub_heading}>Used by next-gen startups and enterprises</h3>
    <div className={styles.list_tools}>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <img src="/react.png" alt="" />
        <span>React</span>
      </div>
      <div>
        <img src="/nextjs.png" alt="" />
      </div>
      <div>
        <img src="/sass.png" alt="" />
      </div>
      <div >
        <img src="/node.png" alt="" />
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <img src="/k8s.png" alt="" />
        <span>Kubernetes</span>
      </div>
      <div >
        <img src="/docker.png" alt="" />
      </div>
      <div >
        <img src="/aws.png" alt="" />
      </div>
      <div >
        <img src="/gcp.png" alt="" />
      </div>
      <div >
        <img src="/mysql.png" alt="" />
      </div>
      <div >
        <img src="/vercel.png" alt="" />
      </div>
    </div>
  </section>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Hundred.dev | We are a team of Software craftsmen</title>
        <meta name="description" content="Hundred.dev | The Ultimate software development team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className={styles.nav}>
          <div>
            <a href="/"><img src="/logo.png" alt="" /></a>
          </div>
          <div className={styles.links}>
            <a href="/work">Our Work</a>
            <a href="/connect">Let's Connect</a>
          </div>
        </nav>
        <HeroSection />
        <ToolsSection />
      </main>
    </>
  )
}
