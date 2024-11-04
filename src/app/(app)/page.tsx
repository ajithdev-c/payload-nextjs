import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const data = await payload.find({
    collection: 'pages',
  })
  return (
    <>
      <main>
        <article>
          <Badge />
          <h1>Payload 3.0 - testing</h1>{' '}
        </article>

        <p>This is the example in action - here is a list of all page titles:</p>
        <ul>
          {data.docs.map((doc) => (
            <li key={doc.id}>{doc.title ?? 'No title'}</li>
          ))}
        </ul>
      </main>
      <Background />
    </>
  )
}

export default Page
