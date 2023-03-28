import Head from 'next/head'
import Hero from '@/components/sections/hero/hero'
import Header from '@/components/sections/header/Header'
import { useEffect, useState } from 'react'
import About from '@/components/sections/about/about'
import Steps from '@/components/sections/steps/steps'
import Offers from '@/components/sections/offers/offers'
import Reviews from '@/components/sections/reviews/reviews'
import Footer from '@/components/sections/footer/footer'
import Partners from '@/components/sections/partners/partners'
import Form from '@/components/sections/form/form'

function Landing() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Агенство недвижимости MARS</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Агенство недвижимости MARS" />
        <meta
          property=" og:description"
          content="Помогаем с покупкой и продажей недвижимости в Санкт-Петербурге и Ленинградской области"
        />
        <meta property="og:image" content="/public/SMMimage.png" />
        <meta property="og:url" content="https://mars-home.com" />
        <meta property="og:site_name" content="Maritime Salary Statistics" />
        <meta
          name="og:keywords"
          content="покапка недвижимости, продажа недвижимости, квартиры в новостройках, переуступки, оформление импотеки, покупка готового бизнеса, продажа готового бизнеса, коммерческая недвижимость, вторичная недвижимость, сделка под ключ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Offers />
        <Steps />
        <Partners />
        <Reviews />
        <Form />
        <Footer />
      </main>
    </>
  )
}

export { Landing }
