import { useMDXComponents as getNextraComponents } from "nextra-theme-docs";
import { StatusBadge } from "./app/components/StatusBadge";

const nextraComponents = getNextraComponents();

const OriginalWrapper = nextraComponents.wrapper;

function ApiPageWrapper({ toc, metadata, sourceCode, children }) {
    const status = metadata?.status;
    // `since` comes from the page frontmatter (metadata). Use metadata?.since
    // instead of the undefined identifier `since` which caused a runtime
    // ReferenceError during prerendering.
    const since = metadata?.since;
    return (
        <OriginalWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
            <StatusBadge since={since} status={status} />
            {children}
        </OriginalWrapper>
    );
}

export function useMDXComponents() {
	return {
		...nextraComponents,
		wrapper: ApiPageWrapper,
	};
}
