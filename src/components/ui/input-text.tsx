import { StyleSheet, TextInput, TextInputProps, useColorScheme, ViewProps, ViewStyle } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";
import { FONT } from "../constants/font";
import ThemedView from "./themed-view";

type InputContianerProps = ViewProps & ThemeProps;
type InputProps = TextInputProps & {
    containerStyle?: ViewStyle;
};
export function InputContainer({ style, children, variant = 'primary', ...props }: InputContianerProps) {
    const theme = useColorScheme() ?? 'light';
    const themeStyle = {
        backgroundColor: COLORS[theme].text[variant],
    } satisfies ViewStyle
    return (
        <ThemedView style={[styles.input, themeStyle, style]}>
            {children}
        </ThemedView>)
}

export default function Input({ style, containerStyle, ...props }: InputProps) {
    const theme = useColorScheme() ?? 'light';
    return (
        <InputContainer style={containerStyle}>
            <TextInput
                {...props}
                style={[
                    {
                        color: COLORS[theme].text.secondary,
                        fontSize: FONT.fontSize,
                        fontWeight: FONT.fontWeight,
                    }, style]
                } />
        </InputContainer>
    )

}

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        width: '100%',
        height: 50,
        paddingVertical: 4,
        paddingHorizontal: 8,
    }
});