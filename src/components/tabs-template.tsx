import { useRouter } from "expo-router";
import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./constants/colors";
import TextBody from "./ui/text-body";
import TextHeader from "./ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "./ui/themed-view";

type Props = { total?: string; children: ReactElement; title?: string };

export default function TabsTemplate({ total, children, title }: Props) {
    const router = useRouter();
    return (
        <ThemedSafeAreaView style={styles.screen}>
            <ThemedView style={styles.header}>
                <View style={styles.heading}>
                    <TextBody variant="gray" style={styles.eyebrow}>JOURNÉE EN COURS</TextBody>
                    <TextHeader header="header2" style={styles.title}>{title ?? "Activité"}</TextHeader>
                </View>
                <TextBody variant="accent" style={styles.status}>● Active</TextBody>
            </ThemedView>
            <ThemedView style={styles.summary}>
                <View>
                    <TextBody variant="gray">{total ? "Total du jour" : "Suivi en direct"}</TextBody>
                    {total ? <TextHeader header="header2">{total}</TextHeader> : <TextBody style={styles.summaryHint}>Ajoutez vos opérations au fil de la journée.</TextBody>}
                </View>
                <TextBody variant="gray" style={styles.date}>Aujourd'hui</TextBody>
            </ThemedView>
            <View style={styles.content}>{children}</View>
            <ThemedView style={styles.finishBar}>
                <TextBody variant="gray">Tout est enregistré</TextBody>
                <TextBody variant="accent" onPress={() => router.push('/')}>Terminer la journée  →</TextBody>
            </ThemedView>
        </ThemedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, paddingHorizontal: 18, paddingTop: 18 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 },
    heading: { gap: 2 },
    eyebrow: { fontSize: 10, letterSpacing: 1.3 },
    title: { fontWeight: "800" },
    status: { fontSize: 12, fontWeight: "700" },
    summary: { borderRadius: 18, padding: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: COLORS.light.background.border },
    summaryHint: { marginTop: 3 },
    date: { fontSize: 11 },
    content: { flex: 1, paddingTop: 16 },
    finishBar: { paddingVertical: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});
