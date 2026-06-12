import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const BASE_URL = 'https://alvarosaavedra.es'
const SITE_NAME = 'Álvaro Saavedra de la Peña'
const DEFAULT_DESCRIPTION = 'Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda'

function Head() {
    const { asPath } = useRouter()
    const { title, frontMatter } = useConfig()
    const canonicalUrl = `${BASE_URL}${asPath.split('?')[0]}`

    const isHome = asPath === '/'

    const pageTitle = isHome
        ? `${SITE_NAME} - DevOps Engineer en Madrid`
        : `${title} | ${SITE_NAME}`

    const description = frontMatter?.description || DEFAULT_DESCRIPTION

    const ogTitle = isHome
        ? `${SITE_NAME} - web personal`
        : `${title} | ${SITE_NAME}`

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

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${SITE_NAME} - DevOps Engineer`} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content="es_ES" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* TODO: replace with your actual X/Twitter handle */}
            <meta name="twitter:site" content="@aspu_" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
            <meta name="twitter:image:alt" content={`${SITE_NAME} - DevOps Engineer`} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Icons & PWA */}
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Structured data */}
            {isHome && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </>
    )
}

export default {
    head: Head,

    logo: <span>alvarosaavedra.es</span>,

    project: {
        link: 'https://github.com/alvarosaavedrau/alvarosaavedra.es',
        icon: (
            <svg aria-label="GitHub" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        )
    },

    docsRepositoryBase: 'https://github.com/alvarosaavedrau/alvarosaavedra.es',

    darkMode: true,

    chat: {
        link: 'https://www.linkedin.com/in/alvaro-saavedra/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
        )
    },

    faviconGlyph: '☁️',

    color: {
        hue: 0,
        saturation: 0,
        lightness: {
            dark: 100,
            light: 50
        }
    },

    feedback: {
        content: 'Dame feedback en GitHub 🔗',
        labels: 'feedback',
    },

    editLink: {
        component: null
    },

    toc: {
        backToTop: function BackToTop() {
            return (
                <a href="#table-of-contents">
                    Volver arriba
                </a>
            )
        },
        float: true
    }
}