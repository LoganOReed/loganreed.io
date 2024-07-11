import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'web-dev',
		company: 'Tandem Web Co',
		description: 'Creating full stack websites for clients.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 1, 1) },
		skills: getSkills('ts', 'js', 'html', 'css'),
		name: 'Full Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
    {
		slug: 'bio-research',
		company: 'Rutgers University',
		description: "Worked in a Biosciences lab with a focus on high performance and scientific computing. The work resulted in a publication in 2023.",
		contract: ContractType.Contract,
		type: 'Instructor',
		location: 'Campus',
		period: { from: new Date(2022, 1, 8), to: new Date(2024, 2, 15) },
		skills: getSkills('python', 'numpy', 'pandas'),
		name: 'Graduate Research Assistant',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'school-tutor-ta',
		company: 'Rutgers University',
		description: "Taught low level mathematics courses as the sole instructor for 3 semesters, TA'd 6 courses in the calculus sequence.",
		contract: ContractType.Contract,
		type: 'Instructor',
		location: 'Campus',
		period: { from: new Date(2021, 4, 28), to: new Date(2023, 12, 28) },
		skills: getSkills(),
		name: 'Part Time Lecturer & TA',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'private-tutor',
		company: 'Self-employed',
		description: 'Tutoring small groups of students in undergraduate level Math and CS courses.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2018, 0, 1), to: new Date(2023, 12, 15) },
		skills: getSkills('css', 'html', 'js', 'python', 'c', 'c++'),
		name: 'Private Tutor: Math and CS',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
