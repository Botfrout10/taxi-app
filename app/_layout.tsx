import { Stack } from "expo-router";

export default function RootLayout() {
  // const theme = useColorScheme();
  return (
    // <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    // </ThemeProvider>
  );
}
