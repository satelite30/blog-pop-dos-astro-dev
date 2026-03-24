# Huellas de Barrio - Blog Estático con Astro

Blog estático construido con Astro que utiliza archivos Markdown para gestionar el contenido.

## Características

- **100% Estático**: Generación estática de todas las páginas
- **Contenido en Markdown**: Gestión sencilla de posts mediante archivos `.md`
- **Automático**: Cada nuevo archivo Markdown crea automáticamente una nueva entrada
- **Sin Base de Datos**: Todo el contenido está en archivos
- **SEO Optimizado**: Meta tags automáticas para cada post
- **Paginación**: Sistema de paginación en la página principal
- **Historial**: Organización automática por mes y año
- **Navegación**: Sistema de posts anterior/siguiente
- **Responsive**: Diseño adaptable a todos los dispositivos

## Estructura del Proyecto

```
├── src/
│   ├── content/
│   │   └── blog/              # Posts en Markdown
│   │       ├── post-1.md
│   │       └── post-2.md
│   ├── content.config.ts      # Configuración de colecciones
│   ├── utils/
│   │   └── posts.ts           # Funciones para trabajar con posts
│   ├── pages/
│   │   ├── index.astro        # Página principal
│   │   ├── all-posts.astro    # Todos los posts
│   │   └── post/
│   │       └── [slug].astro   # Template para posts individuales
│   ├── components/            # Componentes reutilizables
│   ├── layouts/               # Layouts
│   └── styles/                # Estilos CSS
├── public/                    # Archivos estáticos
└── dist/                      # Build de producción

```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Visita `http://localhost:4321`

## Crear un Nuevo Post

1. Crea un archivo `.md` en `src/content/blog/`
2. Copia la plantilla de frontmatter (ver `COMO-AGREGAR-POSTS.md`)
3. Completa los campos obligatorios y opcionales
4. Ejecuta `npm run build` para generar el sitio

### Ejemplo de Post Mínimo

```markdown
---
title: 'Mi Nuevo Post'
subtitle: 'Descripción corta'
image: 'https://url-imagen.jpg'
date: '24 de Marzo de 2026'
publish: '24-03-2026'
author: 'Autor'
category: 'Categoría'
readTime: '5 min'
tags:
  - 'Tag1'
  - 'Tag2'
introductionTitle: 'Introducción'
introductionContent:
  - 'Párrafo de introducción.'
---
```

Ver más detalles en [COMO-AGREGAR-POSTS.md](./COMO-AGREGAR-POSTS.md)

## Build de Producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/` listos para ser desplegados.

## Preview

```bash
npm run preview
```

## Campos del Post

### Obligatorios
- `title`: Título del post
- `subtitle`: Subtítulo
- `image`: Imagen principal
- `date`: Fecha legible
- `publish`: Fecha en formato DD-MM-YYYY
- `author`: Autor
- `category`: Categoría
- `readTime`: Tiempo de lectura
- `tags`: Array de etiquetas
- `introductionTitle`: Título de introducción
- `introductionContent`: Contenido de introducción

### Opcionales
- `images`: Imágenes adicionales
- `videoYoutube`: Videos de YouTube
- `videoLocal`: Videos locales
- `imagenContenido`: Imágenes en el contenido
- `audioContenido`: Archivos de audio
- `textoSecundario`: Texto adicional
- `socialLinkFace`: Enlaces de Facebook
- `socialLinkInsta`: Enlaces de Instagram
- `socialLinkX`: Enlaces de Twitter/X
- `linkDocumento`: Enlaces externos
- `nombreBoton`: Texto de botones
- `quote` y `quoteAuthor`: Cita destacada
- `conclusionTitle` y `conclusionContent`: Conclusión

## Tecnologías

- [Astro](https://astro.build/)
- [Bootstrap 5](https://getbootstrap.com/)
- TypeScript
- Content Collections API

## Notas Importantes

- El slug del post es el nombre del archivo sin la extensión `.md`
- Todos los posts se ordenan por fecha de publicación (más recientes primero)
- La paginación muestra 10 posts por página
- El historial agrupa posts por mes y año automáticamente

## Licencia

Este proyecto pertenece al Grupo MASO - Universidad de Antioquia
