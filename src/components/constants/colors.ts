export const COLORS = {
   light: {
      background: {
         primary: '#F7F8FA',
         secondary: '#FFFFFF',
         black: '#111827',
         gray: '#667085',
         accent: '#F4B400',
         accentSoft: '#FFF4CC',
         border: '#E7E9EE',
      },
      text: {
         primary: '#111827',
         secondary: '#FFFFFF',
         gray: '#667085',
         black: '#111827',
         accent: '#9A6700',
         border: '#E7E9EE',
      }
   },
   dark: {
      background: {
         primary: '#0B0F14',
         secondary: '#151B23',
         black: '#F7F8FA',
         gray: '#98A2B3',
         accent: '#F4B400',
         accentSoft: '#332A10',
         border: '#27303B',
      },
      text: {
         primary: '#F7F8FA',
         secondary: '#0B0F14',
         gray: '#98A2B3',
         black: '#F7F8FA',
         accent: '#FFD666',
         border: '#27303B',
      }
   },
}

export type ThemeProps = {
   variant?: keyof typeof COLORS['light']['text'];
};
