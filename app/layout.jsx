import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// Importar los estilos del tema
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Álvaro Saavedra de la Peña - web personal',
    template: 'alvarosaavedra.es'
  },
  description: 'Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda',
  openGraph: {
    title: 'Álvaro Saavedra de la Peña - web personal',
    description: 'Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda',
    type: 'website'
  }
}

const navbar = (
  <Navbar 
    logo={<span>alvarosaavedra.es</span>}
    projectLink="https://github.com/alvarosaavedrau/alvarosaavedra.es"
    chatLink="https://www.linkedin.com/in/alvaro-saavedra/"
    chatIcon={(
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
      </svg>
    )}
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © alvarosaavedra.es
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="es"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        faviconGlyph="☁️"
        color={{
          hue: { dark: 0, light: 0 },
          saturation: { dark: 0, light: 0 }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/alvarosaavedrau/alvarosaavedra.es"
          editLink={null}
          feedback={{
            content: 'Dame feedback en GitHub 🔗',
            labels: 'feedback'
          }}
          footer={footer}
          toc={{
            backToTop: true,
            float: true
          }}
          darkMode={true}
        >
          {children}
        </Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
