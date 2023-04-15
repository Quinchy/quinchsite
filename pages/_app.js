import '@/styles/globals.css'
import MainNavigation from '@/pages/layouts/MainNavigation'
import Footer from '@/pages/layouts/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
