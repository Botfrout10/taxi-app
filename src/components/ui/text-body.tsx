import { TextProps, TextStyle } from "react-native";
import ThemedText from "./themed-text";



export default function TextBody({ children, style, ...props }: TextProps) {
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
