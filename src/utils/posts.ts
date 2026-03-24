import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');

  // Ordenar por fecha de publicación (más reciente primero)
  return posts.sort((a, b) => {
    const [dayA, monthA, yearA] = a.data.publish.split('-').map(Number);
    const [dayB, monthB, yearB] = b.data.publish.split('-').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getSlug(post: Post): string {
  return post.id?.replace(/\.md$/, '') || post.slug || '';
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getCollection('blog');
  return posts.find(post => getSlug(post) === slug);
}

export async function getNextPost(currentSlug: string): Promise<Post> {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex(post => getSlug(post) === currentSlug);
  const nextIndex = currentIndex === posts.length - 1 ? 0 : currentIndex + 1;
  return posts[nextIndex];
}

export async function getPrevPost(currentSlug: string): Promise<Post> {
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex(post => getSlug(post) === currentSlug);
  const prevIndex = currentIndex === 0 ? posts.length - 1 : currentIndex - 1;
  return posts[prevIndex];
}

export async function getRecommendedPosts(currentSlug: string, limit: number = 5): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => getSlug(post) !== currentSlug).slice(0, limit);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatExcerpt(content: string[], maxLength: number = 150): string {
  const fullText = content.join(' ');
  if (fullText.length <= maxLength) return fullText;
  return fullText.substring(0, maxLength) + '...';
}
