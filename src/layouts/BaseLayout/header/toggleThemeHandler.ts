const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

const toggleThemeHandler = (): void => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const isDark = currentTheme === THEMES.DARK;

  switch (isDark) {
    case true:
      document.documentElement.setAttribute("data-theme", THEMES.LIGHT);
      break;
    case false:
      document.documentElement.setAttribute("data-theme", THEMES.DARK);
      break;
  }
};

export default toggleThemeHandler;
