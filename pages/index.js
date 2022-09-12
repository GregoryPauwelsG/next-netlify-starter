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
        <Header title="Customer's Webiste" />
        <p></p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/" width="400" height="400"></embed>
        <a href="https://testreactapprouter.cfapps.us10.hana.ondemand.com/" target="popup" onclick="window.open('https://testreactapprouter.cfapps.us10.hana.ondemand.com/','',' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no')">link to React app</a>
      </main>
      <Footer />
    </div>
  )
}
