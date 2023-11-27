import {env} from 'node:process'
import type {GatsbyConfig} from 'gatsby'
import 'dotenv/config'
let accessToken = env['CONTENTFUL_DELIVERY_TOKEN']
let host : string = 'cdn.contentful.com'
if (env['NODE_ENV'] === 'development') {
  accessToken = env['CONTENTFUL_PREVIEW_TOKEN']
  host = 'preview.contentful.com'
}
const config : GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-plugin-image'
  }, {
    options: {
      accessToken,
      environment: env['CONTENTFUL_ENVIRONMENT'],
      host,
      spaceId: env['CONTENTFUL_SPACE_ID']
    },
    resolve: 'gatsby-source-contentful'
  }],
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site'
  }
}
export default config