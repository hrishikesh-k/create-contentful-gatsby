import type {CreatePagesArgs} from 'gatsby'
import {resolve} from 'node:path'
export async function createPages(meta : CreatePagesArgs) {
  return meta.graphql<Queries.Query>(`
    query AllContentfulPageQuery {
      allContentfulPage {
        nodes {
          contentful_id,
          slug,
          title
        }
      }
    }
  `).then(contentfulPosts => {
    if (contentfulPosts.errors) {
      throw contentfulPosts.errors
    } else if (contentfulPosts.data) {
      contentfulPosts.data.allContentfulPage.nodes.forEach(contentfulPage => {
        meta.actions.createPage({
          component: resolve('./src/templates/contentful-post.tsx'),
          context: {
            contentful_id: contentfulPage.contentful_id
          },
          path: contentfulPage.slug as string
        })
      })
    }
  })
}