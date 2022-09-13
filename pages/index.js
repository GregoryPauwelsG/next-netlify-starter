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
        <Header title="Customer's Webiste 1" />
        <p></p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/00163E063FDC1ED487FD43C39DFCEBBE" width="400" height="400"></embed>
      </main> 
      <Footer />
    </div>
  )
}
