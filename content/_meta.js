export default {
    '*': {
        type: 'page',
    },
    index: {
        title: 'Inicio',
    },
    Herramientas: {
        title: 'Herramientas',
        type: 'menu',
        items: {
            'Obtener IP pública': {
                title: 'Obtener IP pública',
                href: 'https://ip.alvarosaavedra.es',
                newWindow: true
            },
            'Slug - URL shortener': {
                title: 'Slug - URL shortener',
                href: 'https://ucut.pro',
                newWindow: true
            }
        }
    },
    blog: {
        title: 'Blog',
        type: 'menu',
        items: {
            'CDN con CloudFront y S3': {
                title: 'CDN con CloudFront y S3',
                href: '/blog/cdn',
            },
            'Resultados de tenis automatizado': {
                title: 'Resultados de tenis automatizado',
                href: '/blog/ranking-tenis',
            },
            'Uptime Monitor': {
                title: 'Uptime Monitor',
                href: '/blog/uptime-monitor',
            }
        }
    },
    docs: {
        title: 'Documentación',
        type: 'menu',
        items: {
            terraform: {
                title: 'Terraform',
                href: '/docs/terraform',
            },
            kubernetes: {
                title: 'Kubernetes',
                href: '/docs/kubernetes'
            },
            git: {
                title: 'Git',
                href: '/docs/git'
            }
        }
    },
    links: {
        title: 'Enlaces útiles',
        href: '/links',
        newWindow: false
    },
    CV: {
        title: 'Currículum',
        href: 'https://cv.alvarosaavedra.es',
        newWindow: true
    }
}
