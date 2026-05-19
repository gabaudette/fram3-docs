import { useMDXComponents as getNextraComponents } from 'nextra-theme-docs'
import { StatusBadge } from './app/components/StatusBadge'

const nextraComponents = getNextraComponents()

const OriginalWrapper = nextraComponents.wrapper

function ApiPageWrapper({ toc, metadata, sourceCode, children }) {
  const since = metadata?.since
  const status = metadata?.status
  const showBadge = since || (status && status !== 'live')
  return (
    <OriginalWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      {showBadge && <StatusBadge since={since} status={status} />}
      {children}
    </OriginalWrapper>
  )
}

export function useMDXComponents() {
  return {
    ...nextraComponents,
    wrapper: ApiPageWrapper,
  }
}
