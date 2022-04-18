import fs from 'fs';
import glob from 'glob';
import util from 'util';
import { transformContentPage } from './transformContentPage';

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);
const find = util.promisify(glob);

export async function getAllContentPages() {
  const pagePaths = await find('content/**/*.page.json');
  return await Promise.all(pagePaths.map(readPage));
}

export async function getContentPageBySlug(slug) {
  const pages = await getAllContentPages();
  return pages.find((content) => content.slug === slug);
}

async function readPage(filePath) {
  readPage.cache = readPage.cache || {};
  if (!(filePath in readPage.cache)) {
    const content = await readFile(filePath, 'utf8');
    readPage.cache[filePath] = await transformContentPage(JSON.parse(content));
  }
  return readPage.cache[filePath];
}
