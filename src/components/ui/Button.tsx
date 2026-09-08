import React from "react";
import { Pressable, PressableProps, StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";

type ButtonProps = Omit<PressableProps, 'accessibilityRole' | 'hitSlop'> & ThemeProps;

export default function Button({ style, variant = 'primary', children, ...props }: ButtonProps) {
    const theme = useColorScheme() ?? 'light';
    const isAccent = variant === 'accent';
    const backgroundColor = isAccent ? COLORS[theme].background.accent : COLORS[theme].background.secondary;
    const borderColor = isAccent ? backgroundColor : COLORS[theme].background.border;

    return (
        <Pressable
            accessibilityRole="button"
            hitSlop={8}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor, borderColor },
                typeof style === 'function' ? style({ pressed }) : style,
                pressed && styles.pressed,
            ]}
            {...props}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,
        minHeight: 52,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    } satisfies ViewStyle,
    pressed: { opacity: 0.78, transform: [{ scale: 0.985 }] },
});
