import { Stack } from "expo-router";


// All the route in this folder take options of what is written in the RootLayout
// So the page in this folder are shown as pageSheets
export default function FormsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="course-form" />
        </Stack>
    )
}