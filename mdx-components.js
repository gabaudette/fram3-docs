import { useMDXComponents as getNextraComponents } from "nextra-theme-docs";
import { StatusBadge } from "./app/components/StatusBadge";

const nextraComponents = getNextraComponents();

const OriginalWrapper = nextraComponents.wrapper;

function ApiPageWrapper({ toc, metadata, sourceCode, children }) {
    const status = metadata?.status;
    // StatusBadge only needs `status`. Do not reference or pass any `since`
    // value; the project no longer uses `since` in MDX frontmatter.
    return (
        <OriginalWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
            <StatusBadge status={status} />
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
