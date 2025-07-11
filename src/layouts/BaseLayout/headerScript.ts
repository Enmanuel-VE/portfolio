const elementIds: string[] = [
  `header-sentinel`,
  `header-layout`,
  `header-container`,
  `nav-actions`,
  `theme-toggle`,
  `scroll-to-proyects`,
];

const elements: Record<string, HTMLElement | null> = {};
const currentTheme = document.documentElement.getAttribute("data-theme"); // dark or light

elementIds.forEach((id) => {
  const element = document.getElementById(id);
  elements[id] = element;
});

const handleScroll = (): void => {
  const observer = new IntersectionObserver((entries) => {
    const sentinelIsVisible: boolean = entries[0].isIntersecting;

    const blurAndShadowClasses: string[] = [
      "bg-base-100/50",
      "backdrop-blur-md",
      "shadow-4xl",
    ];

    if (!sentinelIsVisible) {
      elements[`nav-actions`]!.classList.remove("border-primary/0");
      elements[`theme-toggle`]!.classList.remove("border-primary/0");

      elements[`nav-actions`]!.classList.add(
        ...blurAndShadowClasses,
        "border-white/15",
      );
      elements[`theme-toggle`]!.classList.add(
        ...blurAndShadowClasses,
        "border-white/15",
      );
      elements[`scroll-to-proyects`]!.classList.add(
        `opacity-0`,
        `cursor-default`,
        `pointer-events-none`,
      );
    } else {
      elements[`nav-actions`]!.classList.add("border-primary/0");
      elements[`theme-toggle`]!.classList.add("border-primary/0");

      elements[`nav-actions`]!.classList.remove(
        ...blurAndShadowClasses,
        "border-white/15",
      );
      elements[`theme-toggle`]!.classList.remove(
        ...blurAndShadowClasses,
        "border-white/15",
      );
      elements[`scroll-to-proyects`]!.classList.remove(
        `opacity-0`,
        `cursor-default`,
        `pointer-events-none`,
      );
    }
  });
  observer.observe(elements[`header-sentinel`]!);
};

handleScroll();
