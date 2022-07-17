import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
// import { useAuth } from '../hooks/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  // const { register } = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Website </title>
        <meta name="description" content="Thông tin website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       Main
      </main>
      {/* <button onClick={() => register({email: "admin@gmail.com", password: "123456"})}>Register</button> */}
    </div>
  )
}
export default Home
