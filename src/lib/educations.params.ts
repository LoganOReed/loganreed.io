import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: "Bachelor's in Applied Mathematics",
		description: '',
		location: 'San Marcos, Texas',
		logo: Assets.Unknown,
		name: '',
		organization: 'Texas State University',
		period: { from: new Date(2017, 4, 26), to: new Date(2021, 5, 15) },
		shortDescription: '',
		slug: 'undergrad-education-item',
		subjects: ['Data Structures', 'Algorithm', 'Discrete Math', 'Python', 'C/C++', 'Proof-based Math']
	},
	{
		degree: "Master's in Mathematical Sciences",
		description: '',
		location: 'Camden, New Jersey',
		logo: Assets.Unknown,
		name: '',
		organization: 'Rutgers University',
		period: { from: new Date(2021, 4, 26), to: new Date(2023, 5, 15) },
		shortDescription: '',
		slug: 'masters-education-item',
		subjects: ['Academic Research', 'PDEs', 'Numerical Analysis',  'High Performance Computing','Distributed Computing']
	},
	{
		degree: 'PhD in Applied Mathematics',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Temple University',
		period: { from: new Date(2024, 8, 23) },
		shortDescription: '',
		slug: 'phd-education-item',
		subjects: ['Numerical Linear Algebra', 'Applied Neuroscience', 'Real-Time Numerical Analysis']
	}
];
