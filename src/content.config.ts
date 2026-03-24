import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional().default([]),
    date: z.string(),
    publish: z.string(), // Formato DD-MM-YYYY
    author: z.string(),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    introductionTitle: z.string(),
    introductionContent: z.array(z.string()),
    contextTitle: z.string().optional().default(''),
    contextContent: z.array(z.string()).optional().default([]),
    videoYoutube: z.array(z.string()).optional().default([]),
    videoLocal: z.array(z.string()).optional().default([]),
    imagenContenido: z.array(z.string()).optional().default([]),
    audioContenido: z.array(z.string()).optional().default([]),
    textoSecundario: z.array(z.string()).optional().default([]),
    socialLinkFace: z.array(z.string()).optional().default([]),
    socialLinkInsta: z.array(z.string()).optional().default([]),
    socialLinkX: z.array(z.string()).optional().default([]),
    linkDocumento: z.array(z.string()).optional().default([]),
    nombreBoton: z.array(z.string()).optional().default([]),
    quote: z.string().optional().default(''),
    quoteAuthor: z.string().optional().default(''),
    conclusionTitle: z.string().optional().default(''),
    conclusionContent: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
