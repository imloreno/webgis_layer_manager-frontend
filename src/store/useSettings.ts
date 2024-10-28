import { create } from "zustand";
import { Theme } from "@utils/theme";

const defaultTheme: Theme = Theme.light;
interface ITheme {
  themeSelected: Theme;
  setTheme: (theme: Theme) => void;
}

const useSettings = create<ITheme>((set) => ({
  // Theme selected by the user
  themeSelected: defaultTheme,
  setTheme: (theme: Theme) =>
    set((state: ITheme) => ({ ...state, themeSelected: theme })),
}));

export default useSettings;
