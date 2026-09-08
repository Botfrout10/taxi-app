import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, useRouter } from 'expo-router';
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "./constants/colors";

type ShowFormButtonProps = { path: Href };

export default function ShowFormButton({ path }: ShowFormButtonProps) {
    const router = useRouter();
    const theme = useColorScheme() ?? "light";
    const colors = COLORS[theme];
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityLabel="Ajouter"
            onPress={() => router.push(path)}
            style={({ pressed }) => [styles.button, { backgroundColor: colors.background.accent, shadowColor: colors.background.black }, pressed && styles.pressed]}
        >
            <Ionicons name='add' size={27} color={colors.text.black} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: { position: 'absolute', zIndex: 10, width: 58, height: 58, bottom: 20, right: 18, borderRadius: 20, justifyContent: 'center', alignItems: 'center', elevation: 5, shadowOpacity: 0.16, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
    pressed: { opacity: 0.78, transform: [{ scale: 0.94 }] },
});
