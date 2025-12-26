import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input-text";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import { Alert, StyleSheet, useColorScheme } from "react-native";


function SubmitButton() {
    const theme = useColorScheme() ?? 'light'
    return (
        <Button accessibilityLabel="add-note" accessibilityHint="add-note" style={{ ...styles.button }} onPress={() => Alert.alert("Test")}
        >
            <TextHeader style={{
                color: COLORS[theme].text.secondary
            }} header="header3"> Ajouter </TextHeader>
        </Button>
    )
}

export default function NoteForm() {

    return (
        <ThemedSafeAreaView style={styles.container}>
            {/* Inputs */}
            <ThemedView style={styles.inputContainer}>
                <Input
                    multiline
                    numberOfLines={4}
                    placeholder="Texte..."
                    containerStyle={{
                        height : '42%'
                    }}

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