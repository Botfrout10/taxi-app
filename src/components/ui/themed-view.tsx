import { useColorScheme, View, ViewProps } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { COLORS, ThemeProps } from "../constants/colors";

// 2. Create specific prop types for each component
// We use 'type' & 'type' (intersection) which handles overlaps better than 'interface'
type ThemedViewProps = ViewProps & ThemeProps;
type ThemedSafeAreaProps = SafeAreaViewProps & ThemeProps;
export default function ThemedView({ children, style, variant = 'primary', ...props }: ThemedViewProps) {
    const theme = useColorScheme() ?? "light";
    return (
        <View style={[style, { backgroundColor: COLORS[theme].background[variant] }]} {...props}  >{children}</View>
    )
}
export function ThemedSafeAreaView({ children, style, variant = 'primary', ...props }: ThemedSafeAreaProps) {
    const theme = useColorScheme() ?? "light";
    return (
        <SafeAreaView style={[style, { backgroundColor: COLORS[theme].background[variant] }]} {...props}  >{children}</SafeAreaView>
    )
}