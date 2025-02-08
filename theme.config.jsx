export default {
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Álvaro Saavedra de la Peña - Documentación y Recursos" />
            <meta property="og:description" content="Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda" />
            <title>Álvaro Saavedra de la Peña - Documentación y Recursos</title>
            <meta name="description" content="Encuentra documentación y recursos útiles sobre Kubernetes, Terraform y más, en la página web de Álvaro Saavedra de la Peña Úbeda" />
        </>
    ),

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