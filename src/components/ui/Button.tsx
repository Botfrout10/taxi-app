import React from "react";
import { Pressable, PressableProps, PressableStateCallbackType, useColorScheme, ViewStyle } from "react-native";
import { COLORS, ThemeProps } from "../constants/colors";

type ButtonProps = PressableProps & ThemeProps;



export default function Button({ style, variant = 'primary', children, ...props }: ButtonProps) {
    const theme = useColorScheme() ?? 'light';
    const themeStyle = { backgroundColor: COLORS[theme].text[variant] }
    const composedStyle =
        typeof style === "function"
            ? (state: PressableStateCallbackType) => [themeStyle, buttonStyle, style(state)]
            : [themeStyle, buttonStyle, style];

    return (
        <Pressable style={composedStyle} {...props}>
            {children}
        </Pressable>
    );
}

const buttonStyle: ViewStyle = {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    width: "100%",
    alignItems: "center",
};