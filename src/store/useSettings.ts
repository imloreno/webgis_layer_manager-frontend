import { create } from "zustand";
import { defaultTheme, Theme } from "@utils/theme";

interface ISettings {
  // Theme properties
  themeSelected: Theme;
  setTheme: (theme: Theme) => void;
}

const useSettings = create<ISettings>((set) => ({
  // Theme selected by the user
  themeSelected: defaultTheme(),
  setTheme: (theme: Theme) => {
    set({ themeSelected: theme });
    localStorage.setItem("theme", theme);
  },
}));

export default useSettings;
