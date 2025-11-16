enum TitleState {
	Hidden = '¡Te espero!',
	Visible = 'Enmanuel Bracho | Frontend Developer especializado en React, Astro y Tailwind',
}

export default function toggleTitle() {
	document.addEventListener('visibilitychange', () => {
		const isHidden: boolean = document.visibilityState === 'hidden';
		const title: TitleState = isHidden ? TitleState.Hidden : TitleState.Visible;

		document.title = title;
	});
}
