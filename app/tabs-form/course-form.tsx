import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import Button from "@/components/ui/Button";
import { InputPickerModal } from "@/components/ui/input-picker";
import Input from "@/components/ui/input-text";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import TimeInput from "@/components/ui/time-input";
import { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";



export default function CourseForm() {
    const theme = useColorScheme() ?? 'light'
    const [state, set] = useState<string | undefined>(undefined)

    return (
        <ThemedSafeAreaView style={styles.container}>
            {/* Inputs */}
            <ThemedView style={styles.inputContainer}>
                <InputPickerModal placeholder="Choisir Course" items={['Compteur', 'Forfait']} />
                <TimeInput placholder="Heure course" />
                <Input
                    value={state}
                    onChangeText={(value) => set(value)}
                    placeholder="Départ"
                    keyboardType='default'
                />
                <Input
                    placeholder="Arrivée"
                    keyboardType='default'
                />
                <Input
                    placeholder="Montant (CHF)"
                    keyboardType='number-pad'
                />
                <InputPickerModal items={['Paiement cash', 'CB', 'Twint', 'Crédit']} />
            </ThemedView>
            {/* Submit Button */}
            <ThemedView>
                <Button accessibilityLabel="add-course" accessibilityHint="add-course" style={{ ...styles.button }} onPress={null}
                >
                    <TextHeader style={{
                        color: COLORS[theme].text.secondary
                    }} header="header3"> Ajouter </TextHeader>
                </Button>
            </ThemedView>
        </ThemedSafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    inputContainer: {
        gap: SPACING.lg,
        flexDirection: 'column'
    },
    button: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
    }
})