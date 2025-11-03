import type { ImageMetadata } from 'astro';
import icons from './icons';
import images from './images';

interface TechnologyProps {
	icon: ImageMetadata;
	name: string;
	url: string;
}

export interface ProjectType {
	title: string;
	description: string;
	image: ImageMetadata;
	repository: `https://github.com/Enmanuel-VE/${string}/`;
	demo: `https://enmanuel-ve.github.io/${string}/`;
	stackTech: Technology[];
}

class Technology {
	constructor(private readonly props: TechnologyProps) {}

	get name() {
		return this.props.name;
	}

	get url() {
		return this.props.url;
	}

	get icon() {
		return this.props.icon;
	}
}

class CreateProject {
	constructor(private readonly props: ProjectType) {}

	get asObject(): ProjectType {
		return { ...this.props, stackTech: this.props.stackTech };
	}
}

const technologies: Record<string, Technology> = {
	tailwind: new Technology({
		icon: icons.tailwindIcon,
		name: 'Tailwind',
		url: 'https://tailwindcss.com/',
	}),
	typescript: new Technology({
		icon: icons.typescriptIcon,
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
	}),
	javascript: new Technology({
		icon: icons.jsIcon,
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
	}),
	html: new Technology({
		icon: icons.htmlIcon,
		name: 'HTML',
		url: 'https://developer.mozilla.org/es/docs/Web/HTML',
	}),
	css: new Technology({
		icon: icons.cssIcon,
		name: 'CSS',
		url: 'https://developer.mozilla.org/es/docs/Web/CSS',
	}),
};

export const projects: CreateProject[] = [
	new CreateProject({
		title: 'Bento Grid',
		description:
			'Proyecto desarrollado como parte del reto Bento Grid de Frontend Mentor, enfocado en practicar habilidades de estilizado y diseño responsivo. Implementa una cuadrícula adaptable con vistas móviles y de escritorio.',
		image: images.bentoGridImage,
		repository: 'https://github.com/Enmanuel-VE/bento-grid/',
		demo: 'https://enmanuel-ve.github.io/bento-grid/',
		stackTech: [technologies.tailwind, technologies.typescript],
	}),
	new CreateProject({
		title: 'Calculadora vanilla',
		description:
			'Una calculadora simple construida con un stack vanilla, es decir, HTML, CSS y JavaScript. El objetivo de aprendizaje fue practicar la manipulación del DOM, el manejo de estado global y la construcción de una SPA en vanilla.',
		image: images.calculatorImage,
		repository: 'https://github.com/Enmanuel-VE/calculator-app/',
		demo: 'https://enmanuel-ve.github.io/calculator-app/',
		stackTech: [technologies.javascript, technologies.html, technologies.css],
	}),
];
