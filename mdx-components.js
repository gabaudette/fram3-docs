import { useMDXComponents as getNextraComponents } from "nextra-theme-docs";
import { StatusBadge } from "./app/components/StatusBadge";

const nextraComponents = getNextraComponents();

const OriginalWrapper = nextraComponents.wrapper;

function ApiPageWrapper({ toc, metadata, sourceCode, children }) {
	const status = metadata?.status;
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
