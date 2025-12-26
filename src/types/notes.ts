export type notes = {
    id: number;
    name: string;
    note: string;
}


// Fake data for test
export const NOTES: notes[] = [
    ...Array(100).fill(null).map((_, i) => ({
        id: i + 1,
        name: `Note ${i + 1}`,
        note: `test note  ${i + 1} de ela amd aoiad oiad alqdq qodq qlijlimport { COLORS } from "@/components/constants/colors";
        import { SPACING } from "@/components/constants/spacing";
        import Button from "@/components/ui/Button";
        import Input from "@/components/ui/input-text";
        import TextHeader from "@/components/ui/text-header";
        import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
        import TimeInput from "@/components/ui/time-input";
        import { useState } from "react";
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
        
        export default function CourseForm() {
            const [selectedCar, selectCar] = useState<string>()
        
            return (
                <ThemedSafeAreaView style={styles.container}>
                    {/* Inputs */}
                    <ThemedView style={styles.inputContainer}>
                        <TimeInput />
                        <Input
                            placeholder="Todo..."
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
        })import { COLORS } from "@/components/constants/colors";
        import { SPACING } from "@/components/constants/spacing";
        import Button from "@/components/ui/Button";
        import Input from "@/components/ui/input-text";
        import TextHeader from "@/components/ui/text-header";
        import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
        import TimeInput from "@/components/ui/time-input";
        import { useState } from "react";
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
        
        export default function CourseForm() {
            const [selectedCar, selectCar] = useState<string>()
        
            return (
                <ThemedSafeAreaView style={styles.container}>
                    {/* Inputs */}
                    <ThemedView style={styles.inputContainer}>
                        <TimeInput />
                        <Input
                            placeholder="Todo..."
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
        }) ${i + 1}`,
    }))
]
