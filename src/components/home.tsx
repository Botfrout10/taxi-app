import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { COLORS } from "./constants/colors";
import { SPACING } from "./constants/spacing";
import TextBody from "./ui/text-body";
import TextHeader from "./ui/text-header";
import { ThemedSafeAreaView } from "./ui/themed-view";

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayjuayj[';

export default function Home() {
    const theme = useColorScheme() ?? "light";
    const router = useRouter();
    const colors = COLORS[theme];

    return (
        <ThemedSafeAreaView style={styles.screen}>
            <View style={styles.hero}>
                <View style={[styles.logoWrap, { backgroundColor: colors.background.secondary, borderColor: colors.background.border }]}>
                    <Image style={styles.logo} source={require("@assets/images/icon.png")} placeholder={{ blurhash }} contentFit="contain" transition={350} />
                </View>
                <TextHeader header="header1" style={styles.title}>Votre journée, en mouvement.</TextHeader>
                <TextBody variant="gray" style={styles.subtitle}>Gérez vos courses, pauses, notes et frais depuis un seul espace.</TextBody>
            </View>

            <View style={styles.actions}>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Commencer la journée"
                    onPress={() => router.push('/start-journey-modal')}
                    style={({ pressed }) => [styles.primaryAction, { backgroundColor: colors.background.accent }, pressed && styles.pressed]}
                >
                    <MaterialIcons name="play-arrow" size={24} color={colors.text.black} />
                    <View style={styles.actionCopy}>
                        <TextHeader header="header3" style={{ color: colors.text.black }}>Commencer la journée</TextHeader>
                        <TextBody style={{ color: colors.text.black, opacity: 0.68 }}>Configurer votre véhicule et compteur</TextBody>
                    </View>
                    <MaterialIcons name="arrow-forward" size={22} color={colors.text.black} />
                </Pressable>

                <Pressable
                    accessibilityRole="button"
                    onPress={() => Alert.alert("Historique", "L'historique sera disponible ici.")}
                    style={({ pressed }) => [styles.secondaryAction, { backgroundColor: colors.background.secondary, borderColor: colors.background.border }, pressed && styles.pressed]}
                >
                    <MaterialIcons name="history" size={22} color={colors.text.primary} />
                    <TextHeader header="header3" style={{ color: colors.text.primary, flex: 1 }}>Historique des journées</TextHeader>
                    <MaterialIcons name="chevron-right" size={22} color={colors.text.gray} />
                </Pressable>

                <Pressable
                    accessibilityRole="button"
                    onPress={() => Alert.alert("Déconnexion")}
                    style={({ pressed }) => [styles.logout, pressed && styles.pressed]}
                >
                    <MaterialIcons name="logout" size={19} color={colors.text.gray} />
                    <TextBody variant="gray">Déconnexion</TextBody>
                </Pressable>
            </View>

            <TextBody variant="gray" style={styles.footer}>TAXI APP · ESPACE CONDUCTEUR</TextBody>
        </ThemedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, paddingHorizontal: 20, paddingTop: 28, paddingBottom: 18, justifyContent: "space-between" },
    hero: { alignItems: "center", paddingTop: 28 },
    logoWrap: { width: 112, height: 112, borderRadius: 34, borderWidth: 1, alignItems: "center", justifyContent: "center", marginBottom: 28 },
    logo: { width: 82, height: 82 },
    title: { textAlign: "center", fontWeight: "800", maxWidth: 330 },
    subtitle: { textAlign: "center", lineHeight: 22, marginTop: 10, maxWidth: 330 },
    actions: { gap: SPACING.sm },
    primaryAction: { minHeight: 76, borderRadius: 22, paddingHorizontal: 18, flexDirection: "row", alignItems: "center", gap: 14 },
    actionCopy: { flex: 1, gap: 3 },
    secondaryAction: { minHeight: 58, borderRadius: 18, borderWidth: 1, paddingHorizontal: 18, flexDirection: "row", alignItems: "center", gap: 14 },
    logout: { minHeight: 48, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8 },
    pressed: { opacity: 0.78, transform: [{ scale: 0.985 }] },
    footer: { textAlign: "center", fontSize: 10, letterSpacing: 1.4 },
});
