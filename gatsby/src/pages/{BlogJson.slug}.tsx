import { graphql } from 'gatsby';
import { GatsbyPage } from '@redneckz/wildless-cms-uni-blocks/dist/gatsby';

import '../index.css';

export default GatsbyPage('blogJson');

export const queryFragments = graphql`
  fragment BlockFields on Block {
    type
    style
    content {
      primary
      secondary
    }
  }

  fragment BlockFragment on Block {
    ...BlockFields
    blocks {
      ...BlockFields
      blocks {
        ...BlockFields
        blocks {
          ...BlockFields
        }
      }
    }
  }
`;

export const query = graphql`
  query ($id: String) {
    blogJson(id: { eq: $id }) {
      style
      blocks {
        ...BlockFragment
      }
    }
  }
`;
