# Deployment en Cloudflare Pages

## Configuración necesaria

### Build Settings
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 22 (especificado en `.nvmrc`)

### Variables de entorno (opcional)
Si quieres que Nextra obtenga las fechas de última modificación desde Git:
- `VERCEL_DEEP_CLONE=true`

## Notas importantes

Este proyecto usa:
- **Next.js 16.1.6** con App Router
- **Nextra 4.6.1** con exportación estática
- **React 19.2.4**

La exportación estática (`output: 'export'`) está configurada en `next.config.mjs` para compatibilidad con Cloudflare Pages.

## Estructura del proyecto

```
├── app/                    # App Router de Next.js
│   ├── [[...mdxPath]]/    # Catch-all route para contenido MDX
│   ├── layout.jsx         # Layout principal con tema Nextra
│   └── not-found.jsx      # Página 404
├── content/               # Archivos MDX de contenido
│   ├── _meta.js          # Metadata de navegación
│   ├── index.mdx         # Página principal
│   ├── blog/             # Artículos del blog
│   ├── docs/             # Documentación
│   └── links.mdx         # Enlaces útiles
├── mdx-components.jsx    # Componentes MDX globales
└── next.config.mjs       # Configuración de Next.js y Nextra
```
