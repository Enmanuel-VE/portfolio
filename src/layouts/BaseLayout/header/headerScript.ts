const HEADER_SENTINEL = document.getElementById("header-sentinel");

const Elements = {
  NAV_ACTIONS: document.getElementById("nav-actions"),
  THEME_TOGGLE: document.getElementById("theme-toggle"),
  SCROLL_PROYECTS: document.getElementById("scroll-to-proyects"),
};

const IS_VISIBLE_STYLES = {
  NotVisible: {
    NAV_ACTIONS:
      "flex flex-row justify-center items-center border-1 border-base-content/25 rounded-full bg-base-100/50 backdrop-blur-md transition-all duration-250 ease-in-out px-4 shadow-4xl ",

    THEME_TOGGLE:
      "flex flex-row justify-center items-center border-1 border-base-content/25 rounded-full bg-base-100/50 backdrop-blur-md transition-all duration-250 ease-in-out px-2 shadow-4xl cursor-pointer",
    SCROLL_PROYECTS:
      "transition-all duration-250 ease-in-out absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 cursor-default pointer-events-none",
  },
  visible: {
    NAV_ACTIONS:
      "flex flex-row justify-center items-center border-1 border-base-content/0 rounded-full transition-all duration-250 ease-in-out px-4",
    THEME_TOGGLE:
      "flex flex-row justify-center items-center border-1 border-base-content/0 rounded-full transition-all duration-250 ease-in-out px-2 cursor-pointer",
    SCROLL_PROYECTS:
      "transition-all duration-250 ease-in-out absolute bottom-4 left-1/2 transform -translate-x-1/2",
  } as const,
};

const handleScroll = (): void => {
  const observer = new IntersectionObserver((entries) => {
    const sentinelIsVisible: boolean = entries[0].isIntersecting;

    if (!sentinelIsVisible) {
      Elements.NAV_ACTIONS!.className =
        IS_VISIBLE_STYLES.NotVisible.NAV_ACTIONS;

      Elements.SCROLL_PROYECTS!.className =
        IS_VISIBLE_STYLES.NotVisible.SCROLL_PROYECTS;

      Elements.THEME_TOGGLE!.className =
        IS_VISIBLE_STYLES.NotVisible.THEME_TOGGLE;
    } else {
      Elements.NAV_ACTIONS!.className = IS_VISIBLE_STYLES.visible.NAV_ACTIONS;

      Elements.SCROLL_PROYECTS!.className =
        IS_VISIBLE_STYLES.visible.SCROLL_PROYECTS;

      Elements.THEME_TOGGLE!.className = IS_VISIBLE_STYLES.visible.THEME_TOGGLE;
    }
  });
  observer.observe(HEADER_SENTINEL!);
};

window.addEventListener("load", handleScroll);
