export const COLORS = {
   light: {
      background: {
         primary: '#F5F5F5',
         secondary: '#001645',
         black: '#2F2F2F',
         gray: '#888888',
      },
      text: {
         primary: '#001645',
         secondary: '#F5F5F5',
         gray: '#888888',
         black: '#2F2F2F',
      }
   },
   dark: {
      background: {
         primary: '#001645',    // Deep matte black for the main canvas
         secondary: '#F5F5F5',  // Lighter, more vibrant blue to pop against dark backgrounds
         black: '#1E1E1E',      // A slightly lighter grey for "elevated" surfaces/cards
         gray: '#A0A0A0',  // Dimmed grey for hints and meta-data
      },
      text: {
         primary: '#F5F5F5',    // Off-white to reduce eye strain (pure white can be too harsh)
         secondary: '#001645',  // Dimmed grey for hints and meta-data
         gray: '#A0A0A0',  // Dimmed grey for hints and meta-data
         black: '#1E1E1E',      // A slightly lighter grey for "elevated" surfaces/cards
      }
   },
}

// type ThemeVariant = keyof typeof COLORS.dark.text
// 1. Define the custom props shared by both components
export type ThemeProps = {
   variant?: keyof typeof COLORS['light']['text']; // Ensures variant matches your color keys
};

