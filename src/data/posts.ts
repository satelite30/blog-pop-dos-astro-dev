export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  images: string[]; // Nuevo arreglo de imágenes para el post individual
  date: string;
  publish: string; // Nuevo campo en formato DD-MM-YYYY
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  introductionTitle: string;
  introductionContent: string[];
  contextTitle: string;
  contextContent: string[];
  videoYoutube: string[];
  videoLocal: string[];
  imagenContenido: string[];
  audioContenido: string[];
  textoSecundario: string[];
  socialLinkFace: string[];
  socialLinkInsta: string[];
  socialLinkX: string[];
  linkDocumento: string[];
  nombreBoton: string[];
  quote: string;
  quoteAuthor: string;
  conclusionTitle: string;
  conclusionContent: string[];
}

export const posts: Post[] = [
 
];



export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getNextPost(currentId: number): Post {
  const totalPosts = posts.length;
  const nextId = currentId === totalPosts ? 1 : currentId + 1;
  return getPostById(nextId)!;
}

export function getPrevPost(currentId: number): Post {
  const totalPosts = posts.length;
  const prevId = currentId === 1 ? totalPosts : currentId - 1;
  return getPostById(prevId)!;
}

export function getRecommendedPosts(currentId: number): Post[] {
  return posts.filter(post => post.id !== currentId);
}

// Función para generar slug automáticamente a partir del título
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios por guiones
    .replace(/[^\w\-]+/g, '')       // Remueve caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, '-')         // Reemplaza múltiples guiones por uno
    .replace(/^-+/, '')             // Remueve guiones al inicio
    .replace(/-+$/, '');            // Remueve guiones al final
}
