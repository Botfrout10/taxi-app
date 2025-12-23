import { COLORS } from "@/components/constants/colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const theme = useColorScheme() ?? 'dark';
  return (
    // <ThemeProvider value={theme === 'dark'  ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="index" />
      <Stack.Screen name="start-journey-modal"
        options={{
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.90],
          animation: 'slide_from_bottom',
          presentation: 'formSheet',
          contentStyle: {
            backgroundColor: COLORS[theme].background.primary
          }
        }}
      />
    </Stack>
    // </ThemeProvider>
  );
} 
