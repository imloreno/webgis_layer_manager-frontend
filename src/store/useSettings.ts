import { create } from "zustand";
import { Theme } from "@utils/theme";

const defaultTheme = (): Theme => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    return theme as Theme;
  }
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? Theme.dark
    : Theme.light || Theme.dark;
};

interface ITheme {
  themeSelected: Theme;
  setTheme: (theme: Theme) => void;
}

const useSettings = create<ITheme>((set) => ({
  // Theme selected by the user
  themeSelected: defaultTheme(),
  setTheme: (theme: Theme) => {
    set({ themeSelected: theme });
    localStorage.setItem("theme", theme);
  },
}));

export default useSettings;
