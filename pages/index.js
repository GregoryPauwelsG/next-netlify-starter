import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Customers Webiste" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    <object data="https://testReactApprouter.cfapps.us10.hana.ondemand.com"
    width="800"
    height="800"
    type="text/html">
    </object>
      <Footer />
    </div>
  )
}
