import type { ImageMetadata } from 'astro';

import bentoGridImage from '../assets/images/bentoGridProject.png';
import calculatorImage from '../assets/images/calculatorProject.png';
import logoImage from '../assets/images/logo.png';
import profileImage from '../assets/images/profileImage.jpg';

const images: Record<string, ImageMetadata> = {
	bentoGridImage,
	calculatorImage,
	profileImage,
	logoImage,
};

export default images;
