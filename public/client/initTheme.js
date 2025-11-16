function getCurrentTheme() {
	const THEME = { LIGHT: 'light', DARK: 'dark' };

	const saved = localStorage.getItem('theme');
	const isSavedValid = saved === THEME.LIGHT || saved === THEME.DARK;

	if (isSavedValid) return saved; // si hay un tema guardado, devuelve ese tema.

	const schemeDark = `(prefers-color-scheme: ${THEME.DARK})`;
	const prefersDark = window.matchMedia(schemeDark).matches;
	const systemTheme = prefersDark ? THEME.DARK : THEME.LIGHT;

	localStorage.setItem('theme', systemTheme); // si no hay tema guardado, guarda el tema del sistema.
	return systemTheme; // devuelve el tema del sistema.
}

document.body.setAttribute('data-theme', getCurrentTheme());
