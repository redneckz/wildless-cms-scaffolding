import type { CreatePagesArgs } from 'gatsby';
import { ContentPageRepository } from '@redneckz/wildless-cms-uni-blocks/lib/content-page-repository';

const { getAllContentPages } = ContentPageRepository({
  contentDir: 'content',
  publicDir: 'static',
});

export const createPages = async ({ actions: { createPage } }: CreatePagesArgs) => {
  for (const contentPage of await getAllContentPages()) {
    createPage({
      path: contentPage.slug,
      component: require.resolve(`./src/templates/ContentPage.js`),
      context: { contentPage },
    });
  }
};
