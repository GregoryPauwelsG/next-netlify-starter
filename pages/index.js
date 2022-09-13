import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript">
        function newPopup(url) {
        popupWindow = window.open( 
        url,'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
        }
      </script>
      </Head>
      <main>
        <Header title="Customer's Webiste 1" />
        <p>Website deployed to Netlify. Netlify provides a development platform for web applications and dynamic websites </p>
        <p>React app is loaded on this page showing objects with a Category equal to 'Servicemedewerker' </p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/Servicemedewerker" width="700" height="400"></embed>
        <a href="javascript:newPopup('https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/Servicemedewerker');">Open a popup window</a>

      </main> 
      <Footer />
    </div>
  )
}
