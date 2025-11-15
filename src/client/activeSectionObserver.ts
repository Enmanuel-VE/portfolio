function activeSectionObserver(navSelectors: string[]) {
	const sections = document.querySelectorAll('section[id]');

	const intersectionRatios: Record<string, number> = {};

	let activeSectionId: string | null;

	const updateNavLinks = () => {
		navSelectors.forEach((selector) => {
			const nav = document.querySelector(selector);

			if (!nav) return;

			const links = nav.querySelectorAll('a[href^="#"]');
			links.forEach((link) => {
				const isActive = link.getAttribute('href') === `#${activeSectionId}`;
				link.classList.toggle('text-rose-500', isActive);
				link.classList.toggle('active', isActive);
			});
		});
	};

	// Observa los cambios de visibilidad en las secciones.
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const id = entry.target.id;
				intersectionRatios[id] = entry.intersectionRatio;
			});

			// Determina cuál sección tiene mayor visibilidad.
			let bestEntryId = '';
			let maxRatio = 0;

			for (const sectionId in intersectionRatios) {
				if (intersectionRatios[sectionId] > maxRatio) {
					maxRatio = intersectionRatios[sectionId];
					bestEntryId = sectionId;
				}
			}

			// Si no hay cambio de sección, no actualiza.
			if (maxRatio === 0 || bestEntryId === activeSectionId) return;

			// Actualiza la sección activa y los enlaces.
			activeSectionId = bestEntryId;
			updateNavLinks();
		},
		{ threshold: 0.2 },
	);

	sections.forEach((section) => {
		intersectionRatios[section.id] = 0;
		observer.observe(section);
	});
}

activeSectionObserver(['.dock', '#nav-items']);
