import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s | Fram3',
    default: 'Fram3 — Declarative UI for Unity',
  },
  description: 'Fram3 is a declarative UI framework for Unity built on UIToolkit.',
}

const navbar = (
  <Navbar
    logo={<b>Fram3</b>}
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
      </body>
    </html>
  )
}
