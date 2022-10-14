import type { NextPage } from 'next'
import Head from 'next/head'

import CTA from '../components/CTA'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A/B Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-full">
        <Header />

        <main>
          <div className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
