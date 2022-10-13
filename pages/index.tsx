import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex py-6 flex-col min-h-screen">
        <h1 className="text-center text-xl">Keith Chin</h1>
        <h4 className="text-center">Front End Developer</h4>
      </div>
    </div>
  )
}

export default Home;