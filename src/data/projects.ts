import type { ImageMetadata } from 'astro';

import icons from './icons';
import images from './images';

interface StackTech {
	icon: ImageMetadata;
	name: string;
	url: string;
}

export interface Project {
	title: string;
	description: string;
	image: ImageMetadata;
	repository: `https://github.com/Enmanuel-VE/${string}/`;
	demo: `https://enmanuel-ve.github.io/${string}/`;
	stackTech: StackTech[];
}

export const projects: Project[] = [
	{
		title: 'Bento Grid',
		description:
			'Proyecto desarrollado como parte del reto Bento Grid de Frontend Mentor, enfocado en practicar habilidades de estilizado y diseño responsivo. Implementa una cuadrícula adaptable con vistas móviles y de escritorio.',
		image: images.bentoGridImage,
		repository: 'https://github.com/Enmanuel-VE/bento-grid/',
		demo: 'https://enmanuel-ve.github.io/bento-grid/',
		stackTech: [
			{
				icon: icons.tailwindIcon,
				name: 'Tailwind',
				url: 'https://tailwindcss.com/',
			},
			{
				icon: icons.typescriptIcon,
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
			},
		],
	},
	{
		title: 'Calculadora vanilla',
		description:
			'Una calculadora simple construida con un stack vanilla, es decir, HTML, CSS y JavaScript. El objetivo de aprendizaje fue practicar la manipulación del DOM, el manejo de estado global y la construcción de una SPA en vanilla.',
		image: images.calculatorImage,
		repository: 'https://github.com/Enmanuel-VE/calculator-app/',
		demo: 'https://enmanuel-ve.github.io/calculator-app/',
		stackTech: [
			{
				icon: icons.jsIcon,
				name: 'JavaScript',
				url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
			},
			{
				icon: icons.htmlIcon,
				name: 'HTML',
				url: 'https://developer.mozilla.org/es/docs/Web/HTML',
			},
			{
				icon: icons.cssIcon,
				name: 'CSS',
				url: 'https://developer.mozilla.org/es/docs/Web/CSS',
			},
		],
	},
];
