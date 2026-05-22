import { useMDXComponents as getNextraComponents } from "nextra-theme-docs";

const nextraComponents = getNextraComponents();

const OriginalWrapper = nextraComponents.wrapper;

function ApiPageWrapper({ toc, metadata, sourceCode, children }) {
	return (
		<OriginalWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
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
