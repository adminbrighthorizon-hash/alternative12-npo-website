const unsplashImage = (imageId: string, width: number) =>
	`https://images.unsplash.com/${imageId}?auto=format&fit=crop&crop=faces&w=${width}&q=90`;

export const site = {
	name: 'Alternative 12',
	tagline: 'Championing African children with disabilities and from underprivileged communities',
	mission:
		'Alternative 12 partners with communities across Africa to uplift children \u2014 especially those living with disabilities and in underprivileged settings \u2014 through inclusive education, healthcare, rehabilitation, and family support services.',
	headline: 'Every African child deserves a chance \u2014 regardless of ability or circumstance.',
	subheadline:
		'We stand alongside children with disabilities, orphans, and underprivileged youth across Africa \u2014 delivering inclusive education, health access, and community-based support that no child should go without.',
	banner:
		'Reaching children with disabilities and underserved youth across 6 African nations \u2014 12 district partnerships, real results.',
	heroImage: unsplashImage('photo-1632215861513-130b66fe97f4', 2200),
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/programs', label: 'Programs' },
		{ href: '/impact', label: 'Impact' },
		{ href: '/donate', label: 'Donate' },
		{ href: '/contact', label: 'Contact' },
	],
	programs: [
		{
			id: '01',
			title: 'Inclusive Education',
			description:
				'Accessible classrooms, adapted learning materials, assistive devices, teacher training for special needs, and school fee support so every child \u2014 including those with disabilities \u2014 can learn and thrive.',
			accent: 'accent-gold',
			image: unsplashImage('photo-1567057419565-4349c49d8a04', 1600),
		},
		{
			id: '02',
			title: 'Health & Rehabilitation',
			description:
				'Community health outreach, disability screening, physiotherapy, clinic referrals, and nutrition support that reach children in rural and peri-urban communities early.',
			accent: 'accent-green',
			image: unsplashImage('photo-1741940365437-e55b919a89d3', 1600),
		},
		{
			id: '03',
			title: 'Disability & Inclusion',
			description:
				'Assistive technology, mobility aids, therapy services, inclusive play spaces, and community awareness campaigns that break barriers and build belonging for children with disabilities.',
			accent: 'accent-clay',
			image: unsplashImage('photo-1547496614-d145e2fa88ed', 1600),
		},
		{
			id: '04',
			title: 'Child Protection & Welfare',
			description:
				'Safe spaces, psychosocial support, anti-stigma advocacy, caregiver training, and local referral pathways for orphans, children with disabilities, and those facing neglect or crisis.',
			accent: 'accent-teal',
			image: unsplashImage('photo-1645043019869-6c6a2ec3d562', 1600),
		},
	],
	stats: [
		{ value: '2,400+', label: 'Children reached each year' },
		{ value: '480', label: 'Children with disabilities supported' },
		{ value: '680', label: 'Underprivileged households served' },
		{ value: '12', label: 'District partnerships' },
	],
	impact: [
		'1,120 children received adapted school materials and inclusive learning support',
		'480 children with disabilities accessed therapy, mobility aids, or assistive technology',
		'320 caregivers of children with disabilities joined support and skills groups',
		'92% of children in our inclusive education program stayed enrolled the full year',
	],
	audiences: [
		{
			title: 'Children with Disabilities',
			description:
				'We champion the right of every child to learn, play, and grow \u2014 providing assistive devices, therapy, inclusive classrooms, and safe spaces for children living with physical, sensory, or intellectual disabilities across Africa.',
		},
		{
			title: 'Underprivileged Families',
			description:
				'We walk alongside families in poverty \u2014 covering school fees, nutrition support, healthcare referrals, and household strengthening so financial hardship never decides a child\u0027s future.',
		},
		{
			title: 'Partners & Donors',
			description:
				'Schools, clinics, disability organizations, foundations, and individual supporters find a transparent and accountable partner in Alternative 12 \u2014 every contribution is tracked to real outcomes.',
		},
	],
	trustPoints: [
		'Child-centered and disability-inclusive',
		'Locally rooted delivery across Africa',
		'Focused on the most vulnerable children',
		'Transparent impact reporting',
	],
	donationGoal: {
		target: '$150,000',
		focus: 'Annual appeal for inclusive education, disability support, and child welfare across Africa',
	},
	donationTiers: [
		{
			amount: '$25',
			title: 'Adapted learning kit',
			description: 'Provides accessible exercise books, large-print materials, and classroom essentials for a child with special needs.',
		},
		{
			amount: '$60',
			title: 'Disability screening & follow-up',
			description: 'Funds early disability screening, nutrition check-ins, and therapy referrals for one child over three months.',
		},
		{
			amount: '$150',
			title: 'Keep a child in school',
			description: 'Covers school fees, assistive devices, adapted materials, and mentoring for a child with a disability for a full term.',
		},
		{
			amount: '$500',
			title: 'Sponsor a family care group',
			description: 'Funds caregiver training, assistive equipment, community inclusion activities, and case support for families of children with disabilities for a year.',
		},
	],
	gallery: [
		{
			slot: 'Photo 01',
			src: unsplashImage('photo-1632215861513-130b66fe97f4', 1600),
			alt: 'Nigerian schoolchildren gathered during a community education event in Port Harcourt',
			title: 'Every child belongs',
			description: 'Children in Port Harcourt gather for a community school event that reflects the African context this organization serves.',
		},
		{
			slot: 'Photo 02',
			src: unsplashImage('photo-1567057419565-4349c49d8a04', 1600),
			alt: 'Schoolchildren in a classroom in Sierra Leone',
			title: 'Inclusive education',
			description: 'A real classroom in Sierra Leone anchors the education story in an African school environment instead of a generic stock scene.',
		},
		{
			slot: 'Photo 03',
			src: unsplashImage('photo-1741940365437-e55b919a89d3', 1600),
			alt: 'Mother and child smiling together in Kampala, Uganda',
			title: 'Family-centered care',
			description: 'Support starts with caregivers, and this Uganda-based portrait brings that family-centered story closer to the communities the site represents.',
		},
		{
			slot: 'Photo 04',
			src: unsplashImage('photo-1547496614-d145e2fa88ed', 1600),
			alt: 'Three smiling schoolboys in Kenya',
			title: 'Accessible play',
			description: 'The visual mix now shows children from East Africa rather than generic outdoor imagery that could be from anywhere.',
		},
		{
			slot: 'Photo 05',
			src: unsplashImage('photo-1594401786546-ca96b0dc4601', 1600),
			alt: 'Schoolgirl in Uganda sitting outside after class',
			title: 'Health at the doorstep',
			description: 'The visual tone stays grounded in African childhood and community life while the program copy carries the health and referral message.',
		},
		{
			slot: 'Photo 06',
			src: unsplashImage('photo-1695131495201-e0bb8d4b3c01', 1600),
			alt: 'A group of smiling boys standing together in an African community',
			title: 'Stronger together',
			description: 'The gallery now leans toward recognizably African children and community settings, which fits the mission far better.',
		},
	],
	regions: ['Kenya', 'Uganda', 'Ghana', 'DR Congo', 'South Africa', 'Rwanda'],
	stories: [
		{
			place: 'Northern Ghana',
			title: 'Back to school with the right support',
			description:
				'After receiving adapted learning materials, a wheelchair, and dedicated mentoring, Kwame \u2014 a boy with cerebral palsy \u2014 returned to class and now reads to his younger siblings every evening.',
			image: unsplashImage('photo-1567057419565-4349c49d8a04', 1200),
		},
		{
			place: 'Western Kenya',
			title: 'Early screening changes everything',
			description:
				'Community volunteers identified hearing loss in 6-year-old Akinyi during a routine screening visit. With hearing aids and classroom support, she is now thriving in an inclusive school.',
			image: unsplashImage('photo-1741940365437-e55b919a89d3', 1200),
		},
		{
			place: 'Kinshasa, DR Congo',
			title: 'A mother finds her village',
			description:
				'Marie, raising twin daughters with visual impairments alone, joined a caregiver support group. Today she trains other parents and advocates for disability rights in her community.',
			image: unsplashImage('photo-1645043019869-6c6a2ec3d562', 1200),
		},
	],
	team: [
		{
			name: 'Dr. Amara Osei',
			role: 'Executive Director',
			bio: 'Over 15 years leading inclusive development and disability advocacy programs across West and East Africa.',
		},
		{
			name: "James Ng'ang'a",
			role: 'Director of Programs',
			bio: 'Specialist in inclusive education, child protection, and disability support systems across the continent.',
		},
		{
			name: 'Fatima Diallo',
			role: 'Head of Partnerships',
			bio: 'Drives institutional relationships with governments, disability organizations, foundations, and community partners.',
		},
	],
	contacts: {
		partnerships: 'partnerships@alternative12.org',
		general: 'hello@alternative12.org',
		phone: '+260 211 555 120',
		address: 'Regional coordination offices \u2014 Kinshasa, DR Congo & Cape Town, South Africa',
	},
};
