import type { ImageMetadata } from 'astro';

import astroIcon from '../assets/icons/astroIcon.svg';
import cssIcon from '../assets/icons/cssIcon.svg';
import htmlIcon from '../assets/icons/htmlIcon.svg';
import jsIcon from '../assets/icons/jsIcon.svg';
import tailwindIcon from '../assets/icons/tailwindIcon.svg';
import typescriptIcon from '../assets/icons/typescriptIcon.svg';

const icons: Record<string, ImageMetadata> = {
	astroIcon,
	cssIcon,
	htmlIcon,
	jsIcon,
	tailwindIcon,
	typescriptIcon,
};

export default icons;
