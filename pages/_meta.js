export default {
    '*': {
        type: 'page',
    },
    index: {
        title: 'Inicio',
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
    links: {
        title: 'Enlaces útiles',
        href: '/links',
        newWindow: false
    },
    publicIp: {
        title: 'Cuál es mi IP',
        href: 'https://ip.alvarosaavedra.es',
        newWindow: true
    },
    CV: {
        title: 'Currículum',
        href: 'https://cv.alvarosaavedra.es',
        newWindow: true
    }
}