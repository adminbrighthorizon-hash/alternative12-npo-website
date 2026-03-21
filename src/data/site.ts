const unsplashImage = (imageId: string, width: number) =>
	`https://images.unsplash.com/${imageId}?auto=format&fit=crop&crop=faces&w=${width}&q=90`;

export const site = {
	name: 'COPAK GENERAL TRADING (CGT)',
	tagline: 'Expertise at the service of your success.',
	mission:
		'Our mission is to provide comprehensive and innovative solutions tailored to each client\'s specific requirements, with exceptional after-sales service and long-lasting relationships built on trust.',
	headline: 'Complete industrial solutions for reliable performance.',
	subheadline:
		'COPAK GENERAL TRADING (CGT) delivers industrial products, technical expertise, installation, and maintenance services for businesses in the Democratic Republic of Congo and beyond.',
	banner:
		'Since 2023, CGT has delivered quality-driven, adaptable, and client-focused industrial solutions.',
	heroImage: unsplashImage('photo-1581093450021-4a7360e9a7f8', 2200),
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'Company Overview' },
		{ href: '/programs', label: 'Products & Services' },
		{ href: '/impact', label: 'Teams & Partners' },
		{ href: '/donate', label: 'Our Partners' },
		{ href: '/contact', label: 'Contact' },
	],
	programs: [
		{
			id: '01',
			title: 'Pumps and Valves',
			description:
				'Multistage pumps, chemical pumps, clear water pumps, dosing pumps, and industrial valve solutions including diaphragm, guillotine, pinch, and butterfly valves.',
			accent: 'accent-gold',
			image: unsplashImage('photo-1581092160607-ee22621dd758', 1600),
		},
		{
			id: '02',
			title: 'Electrical and Instrumentation',
			description:
				'Electric motors, panels, switchgear, transformers, generators, cable accessories, transmitters, flow meters, probes, and vibration monitoring sensors.',
			accent: 'accent-green',
			image: unsplashImage('photo-1581094271901-8022df4466f9', 1600),
		},
		{
			id: '03',
			title: 'Conveyor Belts and Mechanical Components',
			description:
				'Conveyor belt accessories, pulleys, rollers, drums, reducers, couplings, floor plates, scrapers, wear plates, and electrowinning-related mechanical components.',
			accent: 'accent-clay',
			image: unsplashImage('photo-1565514020179-026b92b84bb6', 1600),
		},
		{
			id: '04',
			title: 'Industrial Support and Safety Solutions',
			description:
				'Industrial filtration, laboratory equipment, high-quality reagents and chemicals, PPE, drilling safety gaskets, mechanical and HDPE pipe welding, geomembrane work, and crusher maintenance support.',
			accent: 'accent-teal',
			image: unsplashImage('photo-1504917595217-d4dc5ebe6122', 1600),
		},
	],
	stats: [
		{ value: 'Since 2023', label: 'Committed to tailored industrial solutions' },
		{ value: 'DR Congo', label: 'Core market and operations base' },
		{ value: 'End-to-End', label: 'Supply, installation, and maintenance' },
		{ value: 'Quality First', label: 'Client-focused delivery standards' },
	],
	impact: [
		'Customized technical and supply solutions aligned to each client\'s operational needs',
		'Strong responsiveness and adaptability to project constraints and market realities',
		'Commitment to innovation and continuous improvement in industrial support services',
		'Long-term client relationships built on trust, reliability, and after-sales support',
	],
	audiences: [
		{
			title: 'Mining and Processing Operations',
			description:
				'CGT supports mining and processing sites with electrowinning components, conveyor solutions, pumps, valves, instrumentation, and specialized maintenance services.',
		},
		{
			title: 'Industrial and Utility Facilities',
			description:
				'From electrical systems and transformers to filtration and mechanical equipment spares, we deliver practical solutions that improve reliability and uptime.',
		},
		{
			title: 'Laboratories and Safety-Focused Teams',
			description:
				'We provide laboratory equipment, quality reagents and chemicals, and comprehensive PPE ranges to support safe and compliant operations.',
		},
	],
	trustPoints: [
		'Excellence in products and services',
		'Innovation for evolving industrial needs',
		'Adaptability for each unique project',
		'Commitment to long-term client success',
	],
	donationGoal: {
		target: 'Strategic Partnerships',
		focus: 'CGT works with trusted manufacturers and suppliers to deliver timely, high-quality industrial solutions.',
	},
	donationTiers: [
		{
			amount: 'Supply',
			title: 'Product Sourcing',
			description: 'Reliable sourcing and delivery of industrial, electrical, mechanical, instrumentation, laboratory, and PPE products.',
		},
		{
			amount: 'Install',
			title: 'Installation Services',
			description: 'On-site technical support for equipment setup, integration, and commissioning aligned with operational requirements.',
		},
		{
			amount: 'Maintain',
			title: 'Maintenance and Spares',
			description: 'Preventive and corrective maintenance support, including spare parts planning to improve continuity and performance.',
		},
		{
			amount: 'Partner',
			title: 'Long-Term Collaboration',
			description: 'Strategic, trust-based partnerships built around quality standards, responsiveness, and continuous improvement.',
		},
	],
	gallery: [
		{
			slot: 'Photo 01',
			src: unsplashImage('photo-1581093458791-9d15482442f7', 1600),
			alt: 'Industrial facility operations',
			title: 'Industrial Expertise',
			description: 'CGT supports industrial operations with complete technical and product solutions.',
		},
		{
			slot: 'Photo 02',
			src: unsplashImage('photo-1581092335397-9583eb92d232', 1600),
			alt: 'Industrial equipment and precision components',
			title: 'Reliable Supply',
			description: 'From pumps and valves to instrumentation and PPE, we deliver quality products for demanding environments.',
		},
		{
			slot: 'Photo 03',
			src: unsplashImage('photo-1581092580497-e0d23cbdf1dc', 1600),
			alt: 'Engineers discussing project plans',
			title: 'Tailored Solutions',
			description: 'Our team analyzes every project context to provide customized and practical industrial solutions.',
		},
		{
			slot: 'Photo 04',
			src: unsplashImage('photo-1565514158740-064f34bd6cfd', 1600),
			alt: 'Mechanical equipment maintenance',
			title: 'Technical Support',
			description: 'Installation, maintenance, and equipment support services are part of our end-to-end offer.',
		},
		{
			slot: 'Photo 05',
			src: unsplashImage('photo-1573164713988-8665fc963095', 1600),
			alt: 'Warehouse and logistics operations',
			title: 'Operational Efficiency',
			description: 'We prioritize timely supply, quality assurance, and responsive service for every client engagement.',
		},
		{
			slot: 'Photo 06',
			src: unsplashImage('photo-1581093806997-124204d9fa9d', 1600),
			alt: 'Business partnership handshake in industrial context',
			title: 'Trusted Partnerships',
			description: 'CGT collaborates with trusted national and international partners to deliver optimal solutions.',
		},
	],
	regions: ['Lubumbashi', 'Haut-Katanga', 'DR Congo', 'Southern Africa', 'National Partners', 'International Suppliers'],
	stories: [
		{
			place: 'Supply Chain',
			title: 'Delivering critical industrial products on time',
			description:
				'Our sourcing and logistics approach helps clients reduce downtime by ensuring that priority equipment and spares are delivered according to operational timelines.',
			image: unsplashImage('photo-1578575437130-527eed3abbec', 1200),
		},
		{
			place: 'Field Engineering',
			title: 'Adapting technical support to each site',
			description:
				'Our team combines mechanical, electrical, and instrumentation expertise to provide practical on-site solutions that align with each project\'s technical realities.',
			image: unsplashImage('photo-1581094794329-c8112c4e5190', 1200),
		},
		{
			place: 'Client Service',
			title: 'Building long-term trust through service quality',
			description:
				'By combining product quality, technical reliability, and responsive after-sales support, CGT strengthens lasting relationships with clients and partners.',
			image: unsplashImage('photo-1556155092-490a1ba16284', 1200),
		},
	],
	team: [
		{
			name: 'Executive Leadership Team',
			role: 'Strategy and Operations',
			bio: 'Leads company direction, quality standards, and operational excellence with a strong focus on client success.',
		},
		{
			name: 'Technical Experts',
			role: 'Engineering and Field Support',
			bio: 'Experienced specialists across electrical, mechanical, instrumentation, welding, and equipment maintenance services.',
		},
		{
			name: 'Partner Network Team',
			role: 'Suppliers and Collaboration',
			bio: 'Coordinates trusted national and international partnerships to ensure reliable supply and innovative industrial solutions.',
		},
	],
	contacts: {
		partnerships: 'info@copakgt.com',
		general: 'info@copakgt.com',
		phone: '+243 89 798 0803',
		address: 'Av: 33 Tony Mwana, Q/ Golf Karavia plateaux 3, C/ Annexe, Ville de Lubumbashi, Province du Haut-Katanga, RDC',
	},
};
