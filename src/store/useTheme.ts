import { create } from 'zustand'
import { Theme } from '@utils/theme'

const defaultTheme: Theme = Theme.dark
interface ITheme {
   themeSelected: Theme
   setTheme: (theme: Theme) => void
}

const useTheme = create<ITheme>((set) => ({
   themeSelected: defaultTheme,
   setTheme: (theme: Theme) => set((state: ITheme) => ({ ...state, themeSelected: theme })),
}))

export default useTheme