export type ServiceIcon =
	| "real-estate"
	| "corporate"
	| "inheritance"
	| "rehab"
	| "auction"
	| "family";

export type SiteData = {
	siteId: string;

	office: {
		name: string;
		ownerName: string;
		ownerTitle: string;
		tagline: string;
	};

	contact: {
		mobile: string;
		landline: string;
		email?: string;
		address: string;
		transit?: string;
		hours: string;
	};

	hero: {
		eyebrow: string;
		headline: string;
		sub: string;
	};

	stats: Array<{ label: string; value: string; suffix?: string }>;

	services: Array<{
		title: string;
		description: string;
		items: string[];
		icon: ServiceIcon;
	}>;

	process: Array<{
		step: string;
		title: string;
		description: string;
	}>;

	points: Array<{
		label: string;
		title: string;
		description: string;
	}>;

	profile: {
		name: string;
		title: string;
		summary: string;
		education: string[];
		certifications: string[];
		courts: string[];
		experience: string[];
	};

	faq: Array<{ q: string; a: string }>;
};
