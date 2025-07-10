const elementIds: string[] = [
  `header-sentinel`,
  `header-layout`,
  `header-container`,
  `nav-actions`,
  `theme-toggle`,
];

const elements: Record<string, HTMLElement | null> = {};

elementIds.forEach((id) => {
  const element = document.getElementById(id);
  elements[id] = element;
});

const handleScroll = (): void => {
  const observer = new IntersectionObserver((entries) => {
    const sentinelIsVisible: boolean = entries[0].isIntersecting;

    const blurAndShadowClasses: string[] = [
      "bg-neutral/50",
      "backdrop-blur-md",
      "shadow-4xl",
    ];

    if (!sentinelIsVisible) {
      elements[`nav-actions`]!.classList.add(...blurAndShadowClasses);
      elements[`theme-toggle`]!.classList.add(...blurAndShadowClasses);
    } else {
      elements[`nav-actions`]!.classList.remove(...blurAndShadowClasses);

      elements[`theme-toggle`]!.classList.remove(...blurAndShadowClasses);
    }
  });
  observer.observe(elements[`header-sentinel`]!);
};

handleScroll();
