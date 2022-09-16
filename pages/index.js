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
        <p>Website deployed to Netlify. Netlify provides a development platform for web applications and dynamic websites </p>
        <p>React app is loaded on this page showing the first 5 objects with a Category equal to 'Servicemedewerker' </p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/detail/00163E063FDC1ED48A9195801A8A2599" width="700" height="400"></embed>
      </main> 
      <Footer />
    </div>
  )
}
