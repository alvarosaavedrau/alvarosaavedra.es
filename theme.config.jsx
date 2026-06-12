import { useRouter } from 'next/router'

const BASE_URL = 'https://alvarosaavedra.es'
const OG_IMAGE = 'https://cdn.alvarosaavedra.es/og-image.png'

function Head() {
    const { asPath } = useRouter()
    const canonicalUrl = `${BASE_URL}${asPath.split('?')[0]}`

    const isHome = asPath === '/'
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Álvaro Saavedra de la Peña" />
            <meta property="og:title" content="Álvaro Saavedra de la Peña - web personal" />
            <meta property="og:description" content="Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda" />
            <meta property="og:image" content={OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content="es_ES" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={OG_IMAGE} />

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
        link: 'https://github.com/alvarosaavedrau/alvarosaavedra.es'
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