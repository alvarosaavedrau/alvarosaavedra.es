import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                    (function() {
                      var sbSiteSecret = "3b809295-8bbc-4521-9fc4-c93ef735668e"
                      window.sitebehaviourTrackingSecret = sbSiteSecret;
                      var scriptElement = document.createElement('script');
                      scriptElement.async = true;
                      scriptElement.id = 'site-behaviour-script-v2';
                      scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                      document.head.appendChild(scriptElement); 
                    })()
                    `
                }} />
            </Head>
            <Component {...pageProps} />
        </>
    );
}