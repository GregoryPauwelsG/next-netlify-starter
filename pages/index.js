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
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/63283b68196eec007cbeaa7e--radiant-licorice-0bc8bd.netlify.app\_next\static\css\a5f0a14eb27b4cb7.css/Servicemedewerker" width="700" height="400"></embed>

      </main> 
      <Footer />
    </div>
  )
}
