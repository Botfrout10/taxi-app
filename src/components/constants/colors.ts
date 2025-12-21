export const COLORS = {
   light: {
      background: {
         primary: '#FFFFFF',
         secondary: '#0172B2FF',
         black: '#2F2F2F',
      },
      text: {
         primary: '#2F2F2F',
         secondary: '#888888',
      }
   },
   dark: {
   background: {
      primary: '#121212',    // Deep matte black for the main canvas
      secondary: '#31A4E6',  // Lighter, more vibrant blue to pop against dark backgrounds
      black: '#1E1E1E',      // A slightly lighter grey for "elevated" surfaces/cards
   },
   text: {
      primary: '#F5F5F5',    // Off-white to reduce eye strain (pure white can be too harsh)
      secondary: '#A0A0A0',  // Dimmed grey for hints and meta-data
   }
},
}

// type ThemeVariant = keyof typeof COLORS.dark.text
// 1. Define the custom props shared by both components
export type ThemeProps = {
    variant?: keyof typeof COLORS['light']['text']; // Ensures variant matches your color keys
};

