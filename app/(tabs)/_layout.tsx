import { COLORS } from "@/components/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
    const theme = useColorScheme() ?? 'light';
    const colors = COLORS[theme];
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.background.accent,
            tabBarInactiveTintColor: colors.text.gray,
            tabBarLabelStyle: { fontSize: 11, fontWeight: '700', marginBottom: 4 },
            tabBarStyle: { backgroundColor: colors.background.secondary, borderTopColor: colors.background.border, height: 70, paddingTop: 8 },
        }}>
            <Tabs.Screen name='courses' options={{ title: 'Courses', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'car-sport' : 'car-sport-outline'} size={23} color={color} /> }} />
            <Tabs.Screen name='pauses' options={{ title: 'Pauses', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'cafe' : 'cafe-outline'} size={23} color={color} /> }} />
            <Tabs.Screen name='notes' options={{ title: 'Notes', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'document-text' : 'document-text-outline'} size={23} color={color} /> }} />
            <Tabs.Screen name='frais' options={{ title: 'Frais', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={23} color={color} /> }} />
        </Tabs>
    );
}
