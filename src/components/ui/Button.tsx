import React from "react";
import { Pressable, PressableProps, PressableStateCallbackType, StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";

type ButtonProps = Omit<PressableProps, 'accessibilityRole' | 'hitSlop'> & ThemeProps;

export default function Button({ style, variant = 'primary', children, ...props }: ButtonProps) {
    const theme = useColorScheme() ?? 'light';
    const isAccent = variant === 'accent';
    const backgroundColor = isAccent ? COLORS[theme].background.accent : COLORS[theme].background.secondary;
    const foregroundColor = isAccent ? COLORS[theme].text.black : COLORS[theme].text.primary;
    const themeStyle = { backgroundColor, borderColor: isAccent ? backgroundColor : COLORS[theme].background.border };
    const composedStyle = typeof style === "function"
        ? (state: PressableStateCallbackType) => [themeStyle, styles.button, style(state)]
        : [themeStyle, styles.button, style];

    return (
        <Pressable
            accessibilityRole="button"
            hitSlop={8}
            style={({ pressed }) => [composedStyle instanceof Array ? composedStyle : composedStyle({ pressed }), pressed && styles.pressed]}
            {...props}
        >
            {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<{ color?: string }>, { color: foregroundColor }) : child)}
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
    pressed: {
        opacity: 0.78,
        transform: [{ scale: 0.985 }],
    },
});
