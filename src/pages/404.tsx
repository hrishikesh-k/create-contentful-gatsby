import {type HeadFC, Link, type PageProps} from 'gatsby'
import React from 'react'
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>Sorry 😔, we couldn't find what you were looking for.<br/><Link
        to="/">Go home</Link>.</p>
    </main>
  )
}
export default NotFoundPage
export const Head : HeadFC = () => <title>Not found</title>