import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import Button from "@/components/ui/Button";
import { InputPickerModal } from "@/components/ui/input-picker";
import Input from "@/components/ui/input-text";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import TimeInput from "@/components/ui/time-input";
import { Alert, StyleSheet, useColorScheme } from "react-native";


function SubmitButton() {
    const theme = useColorScheme() ?? 'light'
    return (
        <Button accessibilityLabel="add-course" accessibilityHint="add-course" style={{ ...styles.button }} onPress={() => Alert.alert("Test")}
        >
            <TextHeader style={{
                color: COLORS[theme].text.secondary
            }} header="header3"> Ajouter </TextHeader>
        </Button>
    )
}

export default function CourseForm() {

    return (
        <ThemedSafeAreaView style={styles.container}>
            {/* Inputs */}
            <ThemedView style={styles.inputContainer}>
                <InputPickerModal items={['Course Compteur', 'Course normal', 'Course test']} />
                <TimeInput placholder="Heure compteur" />
                <Input
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
                <InputPickerModal items={['Paiement cash', 'CB', 'Monnaie']} />
            </ThemedView>
            {/* Submit Button */}
            <ThemedView>
                <SubmitButton />
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