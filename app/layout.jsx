import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import { version } from '../content/version.js'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: {
    template: '%s | Fram3 Docs',
    default: 'Fram3 — Declarative UI for Unity',
  },
  description: 'Fram3 is a declarative UI framework for Unity built on UIToolkit.',
  icons: {
    icon: '/favicon.svg',
  },
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image
          src="/logo.svg"
          alt="Fram3"
          width={32}
          height={32}
          style={{ display: 'inline-block' }}
        />
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            padding: '2px 6px',
            borderRadius: '4px',
            background: 'color-mix(in srgb, currentColor 10%, transparent)',
            color: 'inherit',
            opacity: 0.7,
          }}
        >
          {version}
        </span>
      </span>
    }
    projectLink="https://github.com/gabaudette/fram3"
  />
)

const footer = (
  <Footer>MIT {new Date().getFullYear()} &copy; Fram3.</Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/gabaudette/fram3-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
