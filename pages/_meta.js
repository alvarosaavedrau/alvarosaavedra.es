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
            'Cloudflare Workers': {
                title: 'Cloudflare Workers',
                href: '/blog/cloudflare-workers',
            },
            'CDN con CloudFront y S3': {
                title: 'CDN con CloudFront y S3',
                href: '/blog/cdn',
            },
            'Ranking tenis': {
                title: 'Ranking tenis',
                href: '/blog/ranking-tenis',
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
        href: 'https://alvarosaavedra.cloud',
        newWindow: true
    }
}