import { TextStyle } from "react-native";
import ThemedText, { ThemedTextProps } from "./themed-text";



export default function TextBody({ children, style, ...props }: ThemedTextProps) {
    return (
        <ThemedText style={[bodyStyle, style]} {...props} >
            {children}
        </ThemedText>
    )
}

const bodyStyle = {
    fontFamily: 'system-ui',
    fontStyle: 'normal',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'medium',
} satisfies TextStyle;
