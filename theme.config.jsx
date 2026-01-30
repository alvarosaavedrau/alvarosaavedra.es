import { useConfig } from 'nextra-theme-docs'

export default {
    logo: <span>alvarosaavedra.es</span>,

    project: {
        link: 'https://github.com/alvarosaavedrau/alvarosaavedra.es'
    },

    docsRepositoryBase: 'https://github.com/alvarosaavedrau/alvarosaavedra.es',

    darkMode: true,

    chat: {
        link: 'https://www.linkedin.com/in/alvaro-saavedra/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
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

    primaryHue: 0,
    primarySaturation: 0,

    feedback: {
        content: 'Dame feedback en GitHub 🔗',
        labels: 'feedback',
    },

    editLink: {
        component: null
    },

    toc: {
        backToTop: true,
        float: true
    },
    
    head: function useHead() {
        const config = useConfig()
        const title = config.title ? `${config.title} - alvarosaavedra.es` : 'Álvaro Saavedra de la Peña - web personal'
        const description = config.frontMatter.description || 'Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda'
        
        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="description" content={description} />
                <title>{title}</title>
            </>
        )
    }
}