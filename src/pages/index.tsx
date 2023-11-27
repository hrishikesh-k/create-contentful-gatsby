import {graphql, type HeadFC, Link, type PageProps} from 'gatsby'
import React from 'react'
const IndexPage: React.FC<PageProps<Queries.Query>> = props => {
  if (props.data && props.data.allContentfulPage) {
    return props.data.allContentfulPage.nodes.map(contentfulPage => {
      return (
        <Link to={`/${contentfulPage.slug}`}>{contentfulPage.title}</Link>
      )
    })
  } else {
    return (
      <p>No posts yet</p>
    )
  }
}
export default IndexPage
export const Head : HeadFC = () => <title>Home Page</title>
export const query = graphql`
  query AllContentfulPageQuery {
    allContentfulPage {
      nodes {
        contentful_id,
        slug,
        title
      }
    }
  }
`