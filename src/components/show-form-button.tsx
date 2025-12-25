import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, useRouter } from 'expo-router';
import { Pressable, useColorScheme } from "react-native";
import { COLORS } from "./constants/colors";
import ThemedView from "./ui/themed-view";

type ShowFormButtonProps = {
    path: Href;
};
export default function ShowFormButton({ path }: ShowFormButtonProps) {
    const router = useRouter();
    const theme = useColorScheme() ?? "light";

    return (
        <Pressable
            onPress={() => {
                router.push(path)
            }}
            style={{
                position: 'absolute',
                zIndex: 1,
                width: 60,
                aspectRatio: 1 / 1,
                bottom: 10,
                right: 10,
                borderRadius: 100,
                backgroundColor: COLORS[theme].background.secondary,
                borderWidth : 2,
                borderColor : COLORS[theme].background.primary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <ThemedView style={{
                backgroundColor: COLORS[theme].background.secondary,
            }}>
                <Ionicons name='add' size={32} color={COLORS[theme].background.primary} />
            </ThemedView>
        </Pressable>
    )
}