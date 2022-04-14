import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  return slugs.map(getPostBySlug);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.page.json$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.page.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}
