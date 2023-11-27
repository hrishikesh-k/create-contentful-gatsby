import {ContentfulContentSource} from '@stackbit/cms-contentful'
import {defineStackbitConfig} from '@stackbit/types'
import {env} from 'node:process'
export default defineStackbitConfig({
  contentSources: [
    new ContentfulContentSource({
      accessToken: env['CONTENTFUL_MANAGEMENT_TOKEN']!,
      environment: env['CONTENTFUL_ENVIRONMENT'],
      previewToken: env['CONTENTFUL_PREVIEW_TOKEN']!,
      spaceId: env['CONTENTFUL_SPACE_ID']!,
    })
  ],
  modelExtensions: [{
    name: 'page',
    type: 'page',
    urlPath: '/{slug}'
  }],
  nodeVersion: '18.18.2',
  ssgName: 'gatsby',
  ssgVersion: '5',
  stackbitVersion: '0.6.0'
})
