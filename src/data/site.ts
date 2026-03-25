const unsplashImage = (imageId: string, width: number) =>
	`https://images.unsplash.com/${imageId}?auto=format&fit=crop&crop=faces&w=${width}&q=90`;

export const site = {
	name: 'Alternative 12',
	tagline: 'Supporting vulnerable children and families across Africa',
	mission:
		'Alternative 12 is a donor-supported NPO partnering with local communities in DR Congo and South Africa to protect vulnerable children, include people with disabilities, and support mothers and caregivers facing poverty, neglect, or abuse.',
	headline: 'Every child in DR Congo and South Africa deserves safety, dignity, and opportunity.',
	subheadline:
		'We work with local partners to deliver inclusive education, rehabilitation, child protection, and family support for children, people with disabilities, and mothers in crisis.',
	banner:
		'Every gift helps turn compassion into protection, inclusion, and opportunity across Africa, standing with children, people with disabilities, and mothers in crisis as they rebuild safer, stronger futures with dignity and hope.',
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
				'We champion the right of every child to learn, play, and grow by providing assistive devices, therapy, inclusive classrooms, and safe spaces for children living with disabilities in DR Congo and South Africa.',
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
		'Locally rooted delivery in DR Congo and South Africa',
		'Focused on the most vulnerable children',
		'Transparent impact reporting',
	],
	donationGoal: {
		target: '$150,000',
		focus: 'Annual appeal for inclusive education, disability support, and child protection in DR Congo and South Africa',
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
	regions: ['DR Congo', 'South Africa'],
	stories: [
		{
			place: 'Cape Town, South Africa',
			title: 'Back to school with the right support',
			description:
				'After receiving adapted learning materials, a wheelchair, and dedicated mentoring, a young boy with cerebral palsy returned to class and regained the confidence to learn alongside his peers.',
			image: unsplashImage('photo-1645043019869-6c6a2ec3d562', 1200),
		},
		{
			place: 'Lubumbashi, DR Congo',
			title: 'Early screening changes everything',
			description:
				'Community volunteers identified hearing loss in a young child during a routine screening visit. With hearing support and classroom follow-up, that child is now thriving in an inclusive school setting.',
			image: unsplashImage('photo-1567057419565-4349c49d8a04', 1200),
		},
		{
			place: 'Lubumbashi, DR Congo',
			title: 'A mother finds her village',
			description:
				'Marie, raising twin daughters with visual impairments alone, joined a caregiver support group. Today she trains other parents and advocates for disability rights in her community.',
			image: unsplashImage('photo-1741940365437-e55b919a89d3', 1200),
		},
	],
	team: [
		{
			name: 'Jimmy Kindefu',
			role: 'Executive Director',
			bio: 'Over 15 years leading inclusive development and disability advocacy programs serving vulnerable communities in DR Congo and South Africa.',
		},
		{
			name: 'Aimerance Kindefu',
			role: 'Director of Programs',
			bio: 'Specialist in inclusive education, child protection, and disability support systems for vulnerable children and families.',
		},
		{
			name: 'Laurence Mukuna',
			role: 'Head of Information Technology',
			bio: 'Drives institutional relationships with governments, disability organizations, foundations, and community partners.',
		},
	],
	contacts: {
		partnerships: 'partnerships@alternative12.org',
		general: 'info@alternative12.org',
		phone: '+27 84 969 0173',
		address: 'Regional coordination offices \u2014 Kinshasa, DR Congo & Cape Town, South Africa',
	},
};
