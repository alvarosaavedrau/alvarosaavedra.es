import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import 'nextra-theme-docs/style.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  
  return getLayout(
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  )
}