# Cómo Agregar Nuevos Posts al Blog

Este proyecto ahora utiliza **archivos Markdown** para gestionar los posts del blog. Cada vez que agregas un nuevo archivo `.md` en la carpeta `src/content/blog/`, se creará automáticamente una nueva tarjeta en las páginas de actualidades.

## Estructura del Proyecto

```
src/
├── content/
│   ├── blog/             # ← Aquí van tus archivos .md
│   │   ├── post-1.md
│   │   ├── post-2.md
│   │   └── nuevo-post.md
│   └── config.ts         # Configuración del esquema de contenido
├── utils/
│   └── posts.ts          # Utilidades para trabajar con posts
└── pages/
    ├── index.astro       # Página principal con lista de posts
    ├── all-posts.astro   # Vista completa de todos los posts
    └── post/
        └── [slug].astro  # Template dinámico para posts individuales
```

## Crear un Nuevo Post

### 1. Crea un archivo Markdown

Crea un nuevo archivo en `src/content/blog/` con el nombre que desees (por ejemplo: `mi-nuevo-post.md`)

### 2. Agrega el Frontmatter

El frontmatter es la metadata del post en formato YAML. Copia esta plantilla y complétala:

```markdown
---
title: 'Título del Post'
subtitle: 'Subtítulo descriptivo del post'
image: 'https://url-de-la-imagen-principal.jpg'
images:
  - 'https://imagen-adicional-1.jpg'
  - 'https://imagen-adicional-2.jpg'
date: '24 de Marzo de 2026'
publish: '24-03-2026'  # Formato DD-MM-YYYY
author: 'Nombre del Autor'
category: 'Categoría principal'
readTime: '5 min'
tags:
  - 'Tag 1'
  - 'Tag 2'
  - 'Tag 3'
introductionTitle: 'Introducción'
introductionContent:
  - 'Primer párrafo de la introducción.'
  - 'Segundo párrafo de la introducción.'
contextTitle: 'Contexto'
contextContent:
  - 'Primer párrafo del contexto.'
  - 'Segundo párrafo del contexto.'
videoYoutube:
  - 'https://youtube.com/watch?v=ID_DEL_VIDEO'
videoLocal:
  - '/videos/mi-video.mp4'
imagenContenido:
  - 'https://imagen-1.jpg'
  - 'https://imagen-2.jpg'
audioContenido:
  - '/audio/mi-audio.mp3'
textoSecundario:
  - 'Texto adicional del post.'
  - 'Más texto adicional.'
socialLinkFace:
  - 'https://facebook.com/post/123456'
socialLinkInsta:
  - 'https://instagram.com/p/ABC123'
socialLinkX:
  - 'https://twitter.com/user/status/123456'
linkDocumento:
  - 'https://enlace-al-documento.com'
nombreBoton:
  - 'Ver Documento'
quote: 'Una cita inspiradora del post'
quoteAuthor: 'Autor de la Cita'
conclusionTitle: 'Conclusión'
conclusionContent:
  - 'Párrafo de conclusión.'
---
```

### 3. Campos Opcionales

Todos los campos siguientes son **opcionales**. Si no los necesitas, déjalos como arrays vacíos `[]` o strings vacíos `''`:

- `images`: Imágenes adicionales del header
- `videoYoutube`: Videos de YouTube
- `videoLocal`: Videos locales
- `imagenContenido`: Imágenes en el contenido
- `audioContenido`: Archivos de audio
- `textoSecundario`: Texto adicional
- `socialLinkFace`: Enlaces de Facebook
- `socialLinkInsta`: Enlaces de Instagram
- `socialLinkX`: Enlaces de Twitter/X
- `linkDocumento` y `nombreBoton`: Enlaces externos
- `quote` y `quoteAuthor`: Cita destacada
- `conclusionTitle` y `conclusionContent`: Sección de conclusión

### 4. Campos Obligatorios

Estos campos son **obligatorios** y deben estar siempre presentes:

- `title`: Título del post
- `subtitle`: Subtítulo
- `image`: Imagen principal
- `date`: Fecha legible (ej: "17 de Marzo de 2026")
- `publish`: Fecha en formato DD-MM-YYYY
- `author`: Autor del post
- `category`: Categoría
- `readTime`: Tiempo de lectura
- `tags`: Array de etiquetas (mínimo 1)
- `introductionTitle`: Título de la introducción
- `introductionContent`: Contenido de la introducción (mínimo 1 párrafo)

## Ejemplo Completo

Ver los archivos existentes en `src/content/blog/`:
- `laboratorio-compartires-populares.md`
- `tramas-urbanas-al-reves.md`

## Generar el Sitio Estático

Una vez agregados tus posts, ejecuta:

```bash
npm run build
```

Esto generará todas las páginas estáticas en la carpeta `dist/`. Todas las rutas de posts se generan automáticamente basadas en el slug del archivo Markdown.

## Vista Previa en Desarrollo

Para ver los cambios en tiempo real:

```bash
npm run dev
```

Visita `http://localhost:4321` para ver tu sitio.

## Características del Sistema

1. **Totalmente Estático**: El sitio se genera como HTML estático
2. **Automático**: Cada archivo `.md` nuevo crea automáticamente:
   - Una tarjeta en la página principal (`/`)
   - Una entrada en el historial
   - Una página individual en `/post/[nombre-archivo]`
   - Actualización de posts recomendados
3. **Sin Base de Datos**: Todo el contenido está en archivos Markdown
4. **Rápido**: El sitio se reconstruye completamente en cada build
5. **SEO Optimizado**: Cada post tiene sus propias meta tags

## Estructura de URLs

- Página principal: `/`
- Post individual: `/post/nombre-del-archivo`
- Todos los posts: `/all-posts`

El slug del post es el nombre del archivo sin la extensión `.md`.

## Troubleshooting

Si algo no funciona:

1. Verifica que el frontmatter esté correctamente indentado
2. Asegúrate de que todos los campos obligatorios estén presentes
3. Revisa que las URLs de imágenes sean válidas
4. Ejecuta `npm run build` para ver errores de compilación
