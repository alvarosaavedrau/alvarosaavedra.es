# AGENTS.md

Guía para agentes de IA (y personas) que trabajen en este repositorio.

## Qué es

Web personal de Álvaro Saavedra (https://alvarosaavedra.es): portada, blog, documentación técnica (Terraform, Kubernetes, Git) y enlaces útiles. Está hecha con **Next.js + Nextra 4** (`nextra-theme-docs`) y se exporta como **sitio estático** (`output: 'export'` en `next.config.mjs`). Se despliega en **Cloudflare Pages**, que además genera una preview por cada PR.

## Comandos

```bash
npm install     # Instalar dependencias (package-lock.json está en .gitignore)
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción; genera el sitio estático en out/
```

No hay tests ni linter configurados: `npm run build` es la comprobación a pasar antes de proponer cambios.

## Estructura

- `content/`: todo el contenido, en MDX.
  - `index.mdx`: portada (tarjetas de "Herramientas" y "Blog" con `<Cards>` de `nextra/components`).
  - `blog/*.mdx`, `docs/*.mdx`, `links.mdx`: páginas; la ruta sale de la ruta del fichero (`content/blog/cdn.mdx` → `/blog/cdn`).
  - `_meta.js`: barra de navegación (menús "Herramientas", "Blog", "Documentación", enlaces externos).
- `app/layout.jsx`: layout global (navbar, footer, metadatos base, iconos).
- `app/[[...mdxPath]]/page.jsx`: renderizado de cada página MDX y metadatos SEO (Open Graph, Twitter, canonical, JSON-LD en la portada).
- `mdx-components.jsx`: componentes MDX del tema.
- `public/`: estáticos (favicons, `og-image.png`, `site.webmanifest`, `_headers` de Cloudflare Pages).

## Convenciones

- **Idioma:** todo el contenido visible está en **español**. Mantén ese idioma en textos, títulos y menús.
- **Páginas nuevas:** crea el `.mdx` en `content/` y añádelo a `content/_meta.js` en el menú correspondiente. Si es un post del blog o una herramienta, añade también su tarjeta en `content/index.mdx`.
- **Consistencia de textos:** un mismo enlace aparece a veces en varios sitios (`_meta.js`, `index.mdx`, `links.mdx`). Si cambias su texto, cámbialo en todos.
- **Iconos:** las tarjetas usan SVG inline de [Tabler Icons](https://tabler.io/icons) (variante outline, 24×24).
- **Avisos en MDX:** usa `<Callout>` de `nextra/components`.
- **Sitio estático:** no uses funcionalidades que requieran servidor (API routes, SSR dinámico, optimización de imágenes de Next).
- **Commits:** estilo Conventional Commits (`feat: ...`, `fix: ...`).

## Flujo de trabajo

- Trabaja en una rama y abre una PR contra `main`; no hagas push directo a `main` salvo que se pida expresamente.
- Revisa la preview de Cloudflare Pages que se publica como comentario en la PR antes de mergear.
- CodeQL se ejecuta en cada PR.
