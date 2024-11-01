export enum Theme {
  dark = "dark",
  light = "light",
}

export const themeParams = {
  [Theme.dark]: {
    name: "Dark Theme",
    mapProps: {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
      ext: "png",
      attribution:
        "attribution='&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    },
  },
  [Theme.light]: {
    name: "Light Theme",
    mapProps: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ext: "png",
      attribution:
        "attribution='&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    },
  },
};

export const getTheme = (props: Theme) => {
  return themeParams[props];
};

export const defaultTheme = (): Theme => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    return theme as Theme;
  }
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? Theme.dark
    : Theme.light || Theme.dark;
};
