import type { ServiceIcon as IconKey } from "../../sites/types";

type Props = { name: IconKey };

const PATHS: Record<IconKey, React.ReactNode> = {
	"real-estate": (
		<>
			<path d="M3 10.5 12 3l9 7.5" />
			<path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
		</>
	),
	corporate: (
		<>
			<path d="M3 21h18" />
			<path d="M5 21V7l7-4 7 4v14" />
			<path d="M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9 17h.01M13 17h.01" />
		</>
	),
	inheritance: (
		<>
			<path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
		</>
	),
	rehab: (
		<>
			<path d="M3 12c0 5 4 9 9 9s9-4 9-9" />
			<path d="M12 3v9l5 3" />
			<path d="M3 12a9 9 0 0 1 9-9" />
		</>
	),
	auction: (
		<>
			<path d="m9 12 6 6" />
			<path d="m14 4 6 6" />
			<path d="m13 5 6 6-7 7-6-6Z" />
			<path d="M3 21h7" />
		</>
	),
	family: (
		<>
			<circle cx="9" cy="7" r="3" />
			<circle cx="17" cy="9" r="2.5" />
			<path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
			<path d="M14.5 20c0-2.5 2-4.5 4.5-4.5" />
		</>
	),
};

export default function ServiceIcon({ name }: Props) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="28"
			height="28"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{PATHS[name]}
		</svg>
	);
}
