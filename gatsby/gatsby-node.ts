import { GraphQL } from '@redneckz/wildless-cms-uni-blocks/dist/types';
import type { CreateSchemaCustomizationArgs } from 'gatsby';

export function createSchemaCustomization({ actions }: CreateSchemaCustomizationArgs) {
  const { createTypes } = actions;
  createTypes(GraphQL.Block);
  createTypes(`
    type BlogJson implements Node @dontInfer {
      ${GraphQL.Page}
    }
  `);
}
