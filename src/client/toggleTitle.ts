enum TitleState {
	Hidden = '¡Te espero!',
	Visible = 'Enmanuel Bracho | Frontend Developer especializado en React, Astro y Tailwind',
}

export default function toggleTitle() {
	document.addEventListener('visibilitychange', () => {
		const isHidden: boolean = document.visibilityState === 'hidden'; // Verifica si la página está visible en el navegador.
		const title: TitleState = isHidden ? TitleState.Hidden : TitleState.Visible; // Asigna el estado del título según la visibilidad de la página.

		document.title = title;
	});
}
