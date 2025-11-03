import type { ImageMetadata } from 'astro';

import bentoGridImage from '../assets/images/bentoGridProject.png';
import calculatorImage from '../assets/images/calculatorProject.png';
import profileImage from '../assets/images/cat.jpg';
import logoImage from '../assets/images/logo.png';

const images: Record<string, ImageMetadata> = {
	bentoGridImage,
	calculatorImage,
	profileImage,
	logoImage,
};

export default images;
