import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
