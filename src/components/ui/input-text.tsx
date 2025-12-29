import { StyleSheet, TextInput, TextInputProps, useColorScheme, ViewProps, ViewStyle } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";
import { FONT, PLACEHOLDER } from "../constants/font";
import ThemedView from "./themed-view";

type InputContianerProps = ViewProps & ThemeProps;
type InputProps = Omit<TextInputProps, 'placeholderTextColor'> & {
    containerStyle?: ViewStyle;
};
export function InputContainer({ style, children, variant = 'primary', ...props }: InputContianerProps) {
    const theme = useColorScheme() ?? 'light';
    const themeStyle = {
        backgroundColor: COLORS[theme].text[variant],
    } satisfies ViewStyle
    return (
        <ThemedView style={[styles.input, themeStyle, style]} {...props}>
            {children}
        </ThemedView>)
}

export default function Input({ style, containerStyle, value, ...props }: InputProps) {
    const theme = useColorScheme() ?? 'light';
    return (
        <InputContainer style={containerStyle}>
            <TextInput
                {...props}
                placeholderTextColor={COLORS[theme].text.secondary}
                style={[
                    { color: COLORS[theme].text.secondary },
                    (value == null ? {
                        // Placeholder style
                        fontSize: PLACEHOLDER.fontSize,
                        fontWeight: PLACEHOLDER.fontWeight,
                        opacity: 0.7,
                    } : {
                        // Value style
                        fontSize: FONT.fontSize,
                        fontWeight: FONT.fontWeight,
                    })
                    , style]
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