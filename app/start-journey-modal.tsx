import { CARS } from "@/components/constants/cars-selection";
import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import { InputPickerModal } from "@/components/ui/input-picker";
import Input from "@/components/ui/input-text";
import TextBody from "@/components/ui/text-body";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import TimeInput from "@/components/ui/time-input";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";

export default function Form() {
    const [selectedCar, selectCar] = useState<string>();
    const theme = useColorScheme() ?? 'light';
    const colors = COLORS[theme];
    const { push } = useRouter();

    return (
        <ThemedSafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <View style={[styles.stepIcon, { backgroundColor: colors.background.accentSoft }]}>
                    <MaterialIcons name="directions-car" size={25} color={colors.background.accent} />
                </View>
                <TextHeader header="header2" style={styles.title}>Démarrer la journée</TextHeader>
                <TextBody variant="gray">Quelques informations pour commencer votre suivi.</TextBody>
            </View>

            <ThemedView style={styles.form}>
                <View style={styles.sectionLabel}><TextBody variant="gray" style={styles.eyebrow}>VÉHICULE</TextBody></View>
                <InputPickerModal items={CARS} value={selectedCar} onChange={selectCar} title="Choisir un véhicule" placeholder="Véhicule" />
                <View style={styles.sectionLabel}><TextBody variant="gray" style={styles.eyebrow}>DÉPART</TextBody></View>
                <TimeInput placholder="Heure de départ" />
                <Input keyboardType='number-pad' maxLength={12} placeholder="Début compteur" />
                <Input keyboardType='number-pad' maxLength={12} placeholder="Début tachygraphe" />
            </ThemedView>

            <View style={styles.bottom}>
                <TextBody variant="gray" style={styles.helper}>Vous pourrez modifier ces informations plus tard.</TextBody>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Commencer la journée"
                    onPress={() => push('/(tabs)/courses')}
                    style={({ pressed }) => [styles.submit, { backgroundColor: colors.background.accent }, pressed && styles.pressed]}
                >
                    <TextHeader header="header3" style={{ color: colors.text.black }}>Commencer la journée</TextHeader>
                    <MaterialIcons name="arrow-forward" size={22} color={colors.text.black} />
                </Pressable>
            </View>
        </ThemedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 20, justifyContent: 'space-between' },
    header: { paddingTop: 12, gap: 6 },
    stepIcon: { width: 52, height: 52, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
    title: { fontWeight: '800' },
    form: { gap: SPACING.sm, marginTop: 18 },
    sectionLabel: { marginTop: 4 },
    eyebrow: { fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
    bottom: { gap: 9 },
    helper: { fontSize: 12, textAlign: 'center' },
    submit: { minHeight: 58, borderRadius: 19, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    pressed: { opacity: 0.78, transform: [{ scale: 0.985 }] },
});
