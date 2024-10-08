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
      <main className='max-w-4xl mx-auto p-4 space-y-8'>
        <article className='space-y-4'>
          <Badge />
          <h1 className='text-4xl font-bold'>Payload 3.0 with Tailwind CSS</h1>
          <p className='animate-pulse'>{payload?.config?.collections?.length} collections loaded</p>{' '}
          <p className='text-xs'>
            This BETA is rapidly evolving, you can report any bugs against{' '}
            <Link href="https://github.com/payloadcms/payload-3.0-demo/issues" target="_blank">
              the repo
            </Link>{' '}
            or in the{' '}
            <Link
              href="https://discord.com/channels/967097582721572934/1215659716538273832"
              target="_blank"
            >
              dedicated channel in Discord
            </Link>
            . Payload is running at <Link href="/admin">/admin</Link>. An example of a custom route
            running the Local API can be found at <Link href="/my-route">/my-route</Link>.
          </p>
        </article>
        <div className='space-y-4'>
          <h2 className='text-xl'>You can use the Local API in your server components like this:</h2>
          <div className="codeBlock bg-black text-white p-4 rounded">
            <pre>
              <code>
                {`import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
const payload = await getPayloadHMR({ config })
const data = await payload.find({
  collection: 'pages',
})
return <Pages data={data} />
`}
              </code>
            </pre>
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-xl'>This is the example in action - here is a list of all page titles:</h2>
          <ul>
            {data.docs.map((doc) => (
              <li key={doc.id} className='border p-4 rounded'>
                {doc.title ?? 'No title'}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Background />
    </>
  )
}

export default Page
