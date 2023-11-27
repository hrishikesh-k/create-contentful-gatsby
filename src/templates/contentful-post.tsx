import {graphql, type PageProps} from 'gatsby'
import React, {useEffect} from 'react'
const ContentfulPage : React.FC<PageProps<Queries.Query, {
  contentful_id : Queries.Query['allContentfulPage']['nodes'][number]['id']
}>> = props => {
  useEffect(() => {
    const handleContentChange = async (event : Event) => {
      event.preventDefault()
      await fetch('/__refresh', {
        method: 'POST'
      })
    }
    window.addEventListener('stackbitObjectsChanged', handleContentChange)
    return () => {
      window.removeEventListener('stackbitObjectsChanged', handleContentChange)
    }
  }, [])
  if (props.data && props.data.contentfulPage) {
    return (
      <h1 data-sb-field-path={`${props.data.contentfulPage.contentful_id}:title`}>{props.data.contentfulPage.title}</h1>
    )
  } else {
    return (
      <h1>No data</h1>
    )
  }
}
export default ContentfulPage
export const query = graphql`
  query ContentfulPageQuery(
    $contentful_id : String!
  ) {
    contentfulPage(contentful_id: {
      eq: $contentful_id
    }) {
      contentful_id,
      title
    }
  }
`