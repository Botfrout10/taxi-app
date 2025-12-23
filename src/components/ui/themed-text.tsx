import { Text, TextProps, useColorScheme } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";


export type ThemedTextProps = TextProps & ThemeProps

export default function ThemedText({ children, style, variant = 'primary', ...props }: ThemedTextProps) {
    const theme = useColorScheme() ?? "light";
    return (
        <Text style={[{ color: COLORS[theme].text[variant] }, style]} {...props}  >{children}</Text>
    )
}
