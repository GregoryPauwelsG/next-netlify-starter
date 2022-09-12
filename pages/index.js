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
      <SCRIPT TYPE="text/javascript"> 
        function popup(mylink, windowname) 
          { if (! window.focus)return true; var href; 
           if (typeof(mylink) == 'string') href=mylink; else href=mylink.href; window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); return false; } 
      </SCRIPT>

Read more: https://html.com/javascript/popup-windows/#ixzz7egZoE3NC
      <main>
        <Header title="Customer's Webiste" />
        <p></p>
        <embed type="text/html" src="https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/00163E063FDC1ED487FD43C39DFCEBBE" width="400" height="400"></embed>
        <A HREF="/code-samples/basicpopup/" onClick="return popup("https://testreactapprouter.cfapps.us10.hana.ondemand.com/#/tickets/00163E063FDC1ED487FD43C39DFCEBBE", 'notes')">my popup</A>
      </main>
      <Footer />
    </div>
  )
}
