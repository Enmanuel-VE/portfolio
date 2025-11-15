import type { ImageMetadata } from 'astro';
import icons from './icons';
import images from './images';

type CertificateInput = Omit<CertificateType, 'id'>;

export interface CertificateType {
	id: `${string}-${string}-${string}-${string}-${string}`;
	idCertificate: string;
	title: string;
	description: string;
	image: ImageMetadata;
	institution: {
		name: string;
		logo: ImageMetadata;
		url: string;
	};
	instructors: string[];
	date: Date;
	duration: string;
	skills: string[];
	url: string;
}

class CreateCertificate {
	constructor(private readonly props: CertificateInput) {}

	get asObject(): CertificateType {
		const id = crypto.randomUUID();
		return { ...this.props, id };
	}
}

const institutionPlatzi = {
	name: 'Platzi',
	logo: icons.platziIcon,
	url: 'https://platzi.com/',
} as const;

export const certificates: CreateCertificate[] = [
	new CreateCertificate({
		idCertificate: '4148f3bf-24ea-41c0-9394-034a2a04e804',
		title: 'Curso de Fundamentos de Node.js',
		description:
			'Comprende Node.js, su entorno, módulos nativos y de terceros. Crea scripts, maneja archivos, buffers, streams, procesos, servidores HTTP, seguridad y publica paquetes con NPM. Construye soluciones reales.',
		image: images.diplomaNodeJSImage,
		institution: institutionPlatzi,
		instructors: ['Oscar Barajas Tavares'],
		date: new Date('2025-11-08'),
		duration: '3 horas de contenido, 8 horas de practicas',
		skills: ['JavaScript', 'Node.js', 'NPM'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/11982-nodejs/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: 'c47a8fd9-011b-4863-bde2-1e7b60d17886',
		title: 'Curso de Introducción al Desarrollo Backend',
		description:
			'Comprende el mundo del desarrollo backend. Aprende a crear, gestionar y escalar servicios, conectando bases de datos y utilizando arquitecturas como REST API. Descubre cómo manejar servidores, almacenar información y optimizar con cachés y colas.',
		image: images.diplomaBackendImage,
		institution: institutionPlatzi,
		instructors: ['Nicolas Molina'],
		date: new Date('2025-10-20'),
		duration: '2 horas de contenido, 12 horas de practicas',
		skills: [
			'Backend',
			'Concepts',
			'HTTP',
			'Database',
			'DevOps',
			'Cloud',
			'API',
		],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/4656-backend/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: '077f7ec8-1922-457a-83e4-e7fe91369d46',
		title: 'Curso de React.js',
		description:
			'Desarrolla aplicaciones web modernas con React. Crea componentes, maneja estado y eventos, aplica hooks, consume APIs, estiliza interfaces y usa TypeScript para mayor seguridad. Conoce las novedades de React 19.',
		image: images.diplomaReactJSImage,
		institution: institutionPlatzi,
		instructors: ['Estefany Aguilar'],
		date: new Date('2025-10-19'),
		duration: '3 horas de contenido, 16 horas de practicas',
		skills: ['React', 'JSX', 'JavaScript', 'Styled Components'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/11887-reactjs/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: 'be87df40-6d40-4bc8-8f84-a75c7dc2fa1f',
		title: 'Curso Gratis de Programación Básica',
		description:
			'Domina los fundamentos de programación con JavaScript, HTML y CSS creando un videojuego desde cero. Aprende lógica, estructuras, manipulación del DOM y bases de desarrollo web y backend.',
		image: images.diplomaProgramacionBasicaImage,
		institution: institutionPlatzi,
		instructors: ['Freddy Vega'],
		date: new Date('2022-09-27'),
		duration: '15 horas de contenido, 14 horas de practicas',
		skills: ['HTML', 'CSS', 'JavaScript'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/3208-programacion-basica/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: '245a369e-7a24-4883-b04b-b580f803269e',
		title: 'Curso de Animaciones con CSS',
		description:
			'Aprende a crear animaciones con CSS, desde conceptos básicos hasta la implementación en un juego interactivo. Domina keyframes, animation properties y eficiencias en el rendimiento de tus animaciones web. Incluye ejercicios prácticos.',
		image: images.diplomaAnimacionesCSSImage,
		institution: institutionPlatzi,
		instructors: ['Estefany Aguilar'],
		date: new Date('2022-10-07'),
		duration: '1 hora de contenido, 10 horas de practicas',
		skills: [
			'CSS',
			'Transiciones',
			'Transformaciones',
			'Keyframes',
			'Media Queries',
		],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/2337-animaciones-css/diploma/detalle/',
	}),

	new CreateCertificate({
		idCertificate: '5f8e0ccd-509d-415f-a1eb-d0ebe3fe9307',
		title: 'Curso de Fundamentos de Matemáticas 2018',
		description: '',
		image: images.diplomaFundamentosMatematicasImage,
		institution: institutionPlatzi,
		instructors: [''],
		date: new Date('2022-08-18'),
		duration: '',
		skills: ['Matematicas'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/1393-fundamentos-matematicas-2018/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: '8dc954e8-9036-42e8-b2a9-a5db0510f538',
		title: 'Curso Gratis de Estrategias para Aprender Inglés en Línea',
		description:
			'Mejora tus habilidades comunicativas con estrategias efectivas para aprender inglés online. Identifica mitos, define el rol de estudiantes y profesores, evalúa tu nivel y usa AI con técnicas para optimizar listening, speaking, reading y writing. Mide tu progreso y alcanza tus objetivos.',
		image: images.diplomaEstrategiasIngles2022Image,
		institution: institutionPlatzi,
		instructors: ['Jess Harris', 'Gina Pedraza', 'Jhon Carvajal'],
		date: new Date('2022-10-01'),
		duration: '1 hora de contenido, 10 horas de practicas',
		skills: ['Ingles'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/2633-estrategias-ingles-2022/diploma/detalle/',
	}),
	new CreateCertificate({
		idCertificate: '8445dbfe-0bdb-44a1-9097-7dc034952c1c',
		title: 'Curso de React 17',
		description:
			'Conoce las bases de ReactJS y aprende a crear componentes, manejar estado y props, trabajar con eventos y formularios, y utilizar hooks para optimizar tu código.',
		image: images.diplomaReact17Image,
		institution: institutionPlatzi,
		instructors: [''],
		date: new Date('2022-10-07'),
		duration: '',
		skills: ['ReactJS'],
		url: 'https://platzi.com/p/enmanuel02estudios/curso/2444-react-17/diploma/detalle/',
	}),
];
