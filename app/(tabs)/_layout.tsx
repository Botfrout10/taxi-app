import { COLORS } from "@/components/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";


export default function TabsLayout() {
    const theme = useColorScheme() ?? 'light';

    return (
        <>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS[theme].background.primary,
                }
            }}
            >
                <Tabs.Screen name='courses' options={{
                    tabBarLabelStyle: {
                        color: COLORS[theme].background.secondary
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'car-sport' : 'car-sport-outline'}
                            size={28}
                            color={COLORS[theme].background.secondary} />
                    },
                }} />
                <Tabs.Screen name='pauses' options={{
                    tabBarLabelStyle: {
                        color: COLORS[theme].background.secondary
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'cafe' : 'cafe-outline'}
                            size={28}
                            color={COLORS[theme].background.secondary} />
                    }
                }} />
                <Tabs.Screen name='notes' options={{
                    tabBarLabelStyle: {
                        color: COLORS[theme].background.secondary
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'document' : 'document-outline'}
                            size={28}
                            color={COLORS[theme].background.secondary} />
                    }
                }} />
                <Tabs.Screen name='frais' options={{
                    tabBarLabelStyle: {
                        color: COLORS[theme].background.secondary
                    },
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons name={focused ? 'wallet' : 'wallet-outline'}
                            size={28}
                            color={COLORS[theme].background.secondary} />
                    }
                }} />
            </Tabs>
        </>
    )
} 