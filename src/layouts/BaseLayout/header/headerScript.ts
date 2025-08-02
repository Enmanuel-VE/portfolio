import toggleThemeHandler from "./toggleThemeHandler";

const headerElementIds = {
  HEADER_SENTINEL: "header-sentinel",
  HEADER_LAYOUT: "header-layout",
  HEADER_CONTAINER: "header-container",

  NAV_ACTIONS: "nav-actions",
  THEME_TOGGLE: "theme-toggle",
  SCROLL_PROYECTS: "scroll-to-proyects",
};

const headerElements: { [key: string]: HTMLElement | null } = {};

Object.entries(headerElementIds).forEach(([key, value]) => {
  headerElements[value] = document.getElementById(value);
});

console.log(headerElements);

const handleScroll = (): void => {
  const observer = new IntersectionObserver((entries) => {
    const sentinelIsVisible: boolean = entries[0].isIntersecting;

    if (!sentinelIsVisible) {
      headerElements["nav-actions"]!.classList.remove("border-primary/0");
      headerElements["theme-toggle"]!.classList.remove("border-primary/0");

      headerElements["nav-actions"]!.classList.add(
        "bg-base-100/50",
        "backdrop-blur-md",
        "shadow-4xl",
        "border-white/15",
      );
      headerElements["theme-toggle"]!.classList.add(
        "bg-base-100/50",
        "backdrop-blur-md",
        "shadow-4xl",
        "border-white/15",
      );
      headerElements["scroll-to-proyects"]!.classList.add(
        "opacity-0",
        "cursor-default",
        "pointer-events-none",
      );
    } else {
      headerElements["nav-actions"]!.classList.add("border-primary/0");
      headerElements["theme-toggle"]!.classList.add("border-primary/0");

      headerElements["nav-actions"]!.classList.remove(
        "bg-base-100/50",
        "backdrop-blur-md",
        "shadow-4xl",
        "border-white/15",
      );
      headerElements["theme-toggle"]!.classList.remove(
        "bg-base-100/50",
        "backdrop-blur-md",
        "shadow-4xl",
        "border-white/15",
      );
      headerElements["scroll-to-proyects"]!.classList.remove(
        "opacity-0",
        "cursor-default",
        "pointer-events-none",
      );
    }
  });
  observer.observe(headerElements["header-sentinel"]!);
};

const main = (): void => {
  const themeToggleButton = document.getElementById("theme-change");

  themeToggleButton?.addEventListener("click", toggleThemeHandler);
  handleScroll();
};

window.addEventListener("load", main);
