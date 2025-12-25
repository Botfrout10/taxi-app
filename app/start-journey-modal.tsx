import { CARS } from "@/components/constants/cars-selection";
import { COLORS } from "@/components/constants/colors";
import { SPACING } from "@/components/constants/spacing";
import Button from "@/components/ui/Button";
import InputPicker from "@/components/ui/input-picker";
import Input from "@/components/ui/input-text";
import TextHeader from "@/components/ui/text-header";
import ThemedView, { ThemedSafeAreaView } from "@/components/ui/themed-view";
import TimeInput from "@/components/ui/time-input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";


function SubmitButton() {
    const theme = useColorScheme() ?? 'light'
    const { push } = useRouter()
    return (
        <Button accessibilityLabel="start-journey" accessibilityHint="start-journey" style={{ ...styles.button }} onPress={() => push('/(tabs)/courses')}
        >
            <TextHeader style={{
                color: COLORS[theme].text.secondary
            }} header="header3"> Commencer la journée </TextHeader>
        </Button>
    )
}

export default function Form() {
    const [selectedCar, selectCar] = useState<string>()

    return (
        <ThemedSafeAreaView style={styles.container}>
            {/* Inputs */}
            <ThemedView style={styles.inputContainer}>
                <InputPicker
                    selectedValue={selectedCar}
                    onValueChange={(item) => selectCar(String(item))}
                    items={CARS}
                />
                <TimeInput />
                <Input
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