import type { ImageMetadata } from 'astro';

import bentoGridImage from '../assets/images/bentoGridProject.png';
import calculatorImage from '../assets/images/calculatorProject.png';
import profileImage from '../assets/images/cat.jpg';

const images: Record<string, ImageMetadata> = {
	bentoGridImage,
	calculatorImage,
	profileImage,
};

export default images;
