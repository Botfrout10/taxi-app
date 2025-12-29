import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import Button from "@/components/ui/Button";
import { InputPickerModal } from "@/components/ui/input-picker";
import Input from "@/components/ui/input-text";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import { Alert, StyleSheet, useColorScheme } from "react-native";


function SubmitButton() {
    const theme = useColorScheme() ?? 'light'
    return (
        <Button accessibilityLabel="add-frais" accessibilityHint="add-frais" style={{ ...styles.button }} onPress={() => Alert.alert("Test")}
        >
            <TextHeader style={{
                color: COLORS[theme].text.secondary
            }} header="header3"> Ajouter </TextHeader>
        </Button>
    )
}

export default function FraisForm() {

    return (
        <ThemedSafeAreaView style={styles.container}>
            {/* Inputs */}
            <ThemedView style={styles.inputContainer}>
                <InputPickerModal items={["Carburant", "Lavage","Frais divers"]} />
                <Input
                    placeholder="Montant (CHF)"
                    keyboardType='number-pad'
                    maxLength={12}
                />
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
        gap: SPACING.sm,
        flexDirection: 'column'
    },
    button: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
    }
})