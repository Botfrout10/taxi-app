import { TextStyle } from "react-native";
import ThemedText, { ThemedTextProps } from "./themed-text";

export enum HeaderStyleVariant {
    header1,
    header2,
    header3,
}

type TextHeaderProps = ThemedTextProps & {
    header?: keyof typeof HeaderStyleVariant
}
export default function TextHeader({ children, style, header = 'header1', ...props }: TextHeaderProps) {
    let headerStyleVariant: TextStyle | null = null;
    switch (header) {
        case "header1":
            headerStyleVariant = header1Style;
            break;
        case "header2":
            headerStyleVariant = header2Style;
            break;
        case "header3":
            headerStyleVariant = header3Style;
            break;
    }
    return (
        <ThemedText style={[headerStyle, headerStyleVariant, style]} {...props} >
            {children}
        </ThemedText>
    )
}

const headerStyle = {
    fontFamily: 'system-ui',
    fontStyle: 'normal',
    textAlign: 'left',
} satisfies TextStyle;

const header1Style = {
    fontSize: 44,
    fontWeight: 'normal',
} satisfies TextStyle;
const header2Style = {
    fontSize: 30,
    fontWeight: 'normal',
    textTransform: 'uppercase',
} satisfies TextStyle;
const header3Style = {
    fontSize: 20,
    fontWeight: 'bold',
} satisfies TextStyle;