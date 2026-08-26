import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const BASE_URL = 'https://alvarosaavedra.es'
const SITE_NAME = 'Álvaro Saavedra de la Peña'
const DEFAULT_DESCRIPTION = 'Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda'

function routeFor(mdxPath) {
  return mdxPath ? `/${mdxPath.join('/')}` : '/'
}

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const route = routeFor(params.mdxPath)
  const isHome = route === '/'

  const description = metadata.description || DEFAULT_DESCRIPTION
  const title = isHome ? `${SITE_NAME} - DevOps Engineer en Madrid` : metadata.title
  const ogTitle = isHome ? `${SITE_NAME} - web personal` : metadata.title
  const canonicalUrl = `${BASE_URL}${route}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      url: canonicalUrl,
      locale: 'es_ES',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - DevOps Engineer`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@aspu_',
      title: ogTitle,
      description,
      images: [`${BASE_URL}/og-image.png`]
    }
  }
}

const Wrapper = getMDXComponents().wrapper

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Álvaro Saavedra de la Peña',
  url: BASE_URL,
  jobTitle: 'DevOps Engineer',
  sameAs: [
    'https://github.com/alvarosaavedrau/alvarosaavedra.es',
    'https://www.linkedin.com/in/alvaro-saavedra/'
  ]
}

export default async function Page(props) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  const isHome = routeFor(params.mdxPath) === '/'

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      {isHome && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
