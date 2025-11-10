export interface CertificateType {
	id: string;
	title: string;
	description: string;
	image: string;
	institution: string;
	instructors: string[];
	date: string;
	duration: string;
	format: string;
	skills: string[];
	document: {
		type: string;
		url: string;
	};
	url: string;
}

class CreateCertificate {
	constructor(private readonly props: CertificateType) {}

	get asObject(): CertificateType {
		return { ...this.props };
	}
}
// mock data
export const certificates: CreateCertificate[] = [
	new CreateCertificate({
		id: 'cert-001',
		title: 'Introducción a React',
		description:
			'Curso intensivo sobre fundamentos de React y desarrollo de componentes.',
		image: 'https://example.com/certificates/react-intro.png',
		institution: 'Platzi',
		instructors: ['Juan Pérez', 'Ana Gómez'],
		date: '2024-08-15',
		duration: '20 horas',
		format: 'online',
		skills: ['React', 'JSX', 'Componentes', 'Hooks'],
		document: {
			type: 'png',
			url: 'https://example.com/certificates/react-intro.png',
		},
		url: 'https://platzi.com/certificado/react-intro',
	}),
	new CreateCertificate({
		id: 'cert-002',
		title: 'Avanzado en React',
		description:
			'Curso avanzado sobre React y desarrollo de aplicaciones complejas.',
		image: 'https://example.com/certificates/react-advanced.png',
		institution: 'Platzi',
		instructors: ['Juan Pérez', 'Ana Gómez'],
		date: '2024-09-15',
		duration: '30 horas',
		format: 'online',
		skills: ['React', 'JSX', 'Componentes', 'Hooks', 'Contexto'],
		document: {
			type: 'pdf',
			url: 'https://example.com/certificates/react-advanced.pdf',
		},
		url: 'https://platzi.com/certificado/react-advanced',
	}),
	new CreateCertificate({
		id: 'cert-003',
		title: 'Desarrollo de Aplicaciones Web',
		description:
			'Curso completo sobre desarrollo de aplicaciones web con React y Node.js.',
		image: 'https://example.com/certificates/web-apps.png',
		institution: 'Platzi',
		instructors: ['Juan Pérez', 'Ana Gómez'],
		date: '2024-10-15',
		duration: '40 horas',
		format: 'online',
		skills: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
		document: {
			type: 'pdf',
			url: 'https://example.com/certificates/web-apps.pdf',
		},
		url: 'https://platzi.com/certificado/web-apps',
	}),
];
