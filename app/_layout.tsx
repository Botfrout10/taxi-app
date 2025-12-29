import { COLORS } from "@/components/constants/colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const theme = useColorScheme() ?? 'light';
  return (
    // <ThemeProvider value={theme === 'dark'  ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs-form"
        options={{
          headerShown: false,
          presentation: 'formSheet',
          animation: 'slide_from_bottom',
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.9],
        }}
      />
      <Stack.Screen name="start-journey-modal"
        options={{
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.9],
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
