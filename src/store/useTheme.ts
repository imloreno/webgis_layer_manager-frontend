import { create } from 'zustand'
import { Theme } from '@utils/theme'

const defaultTheme: Theme = Theme.dark

const useTheme = create((set) => ({
   themeSelected: defaultTheme,
   setTheme: () => set((theme: Theme) => ({ themeSelected: theme })),
}))

export default useTheme