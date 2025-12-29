import { Picker, PickerProps } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { FONT, PLACEHOLDER } from "../constants/font";
import Button from "./Button";
import { InputContainer } from "./input-text";
import ModalBottom from "./modal-bottom";
import TextHeader from "./text-header";
import ThemedView from "./themed-view";

type InputPiCkerProps = Omit<PickerProps, 'dropDownIconColor' | 'style'> & {
    items: string[]
}
// TODO : Remove the picker dependency and create one using pageSheet modal
export default function InputPicker({ items, ...props }: InputPiCkerProps) {
    const theme = useColorScheme() ?? 'light';
    const themeIconColor = COLORS[theme].text.primary
    return (
        <Picker
            dropdownIconColor={themeIconColor}
            style={{
                color: COLORS[theme].text.primary
            }}
            {...props}
        >
            {
                items.map((car) =>

                    <Picker.Item
                        style={
                            styles.pickerItem
                        }
                        key={car}
                        label={car} value={car} />
                )
            }
        </Picker>
    )
}


export function InputPickerModal({
    items,
    value,
    onChange,
    title,
    placeholder,
    visible,
    defaultVisible,
    onRequestClose,
}: {
    items: string[];
    value?: string;
    onChange?: (value: string) => void;
    title?: string;
    placeholder?: string;
    visible?: boolean;          // optional controlled visibility
    defaultVisible?: boolean;   // initial visibility for uncontrolled mode
    onRequestClose?: () => void; // used when visibility is controlled
}) {
    const theme = useColorScheme() ?? 'light';

    const [internalVisible, setInternalVisible] = useState<boolean>(!!defaultVisible);
    const [selected, setSelected] = useState<string | undefined>(value);

    const isControlled = typeof visible === 'boolean';
    const modalVisible = isControlled ? !!visible : internalVisible;

    useEffect(() => {
        setSelected(value);
    }, [value]);

    const open = () => {
        if (!isControlled) setInternalVisible(true);
    };

    const close = () => {
        if (isControlled) {
            onRequestClose && onRequestClose();
        } else {
            setInternalVisible(false);
        }
    };

    const handleSelect = (v: string) => {
        setSelected(v);
        onChange && onChange(v);
        close();
    };

    return (
        <>
            <Button
                onPress={open}
                variant="primary"
                style={{
                    padding: 0,
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                    alignItems: 'stretch',
                }}
            >
                <InputContainer style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
                >
                    <TextHeader
                        variant="secondary"
                        // style={{
                        //     fontSize: FONT.fontSize,
                        //     fontWeight: FONT.fontWeight,
                        //     ...(selected == null ? {
                        //         color: COLORS[theme].text.secondary,
                        //         fontSize: PLACEHOLDER.fontSize,
                        //         fontWeight : PLACEHOLDER.fontWeight,
                        //         opacity: 0.7,
                        //     } : null)
                        // }}
                        style={[
                            (selected == null ? {
                                // Placeholder style
                                fontSize: PLACEHOLDER.fontSize,
                                fontWeight: PLACEHOLDER.fontWeight,
                                opacity: 0.7,
                            } : {
                                // Value style
                                fontSize: FONT.fontSize,
                                fontWeight: FONT.fontWeight,
                            })]}
                    >
                        {selected ?? placeholder ?? 'Select...'}
                    </TextHeader>
                </InputContainer>
            </Button >

            <ModalBottom
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={close}
            >
                <ThemedView
                    style={{
                        width: '100%',
                        maxHeight: '50%',
                        backgroundColor: COLORS[theme].background.secondary,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        paddingBottom: 16,
                        paddingTop: 8,
                        paddingHorizontal: 8,
                    }}
                >
                    {title ? (
                        <TextHeader header="header3"
                            style={{
                                textAlign: 'center',
                                marginVertical: 8,
                                color: COLORS[theme].text.secondary,

                            }}
                        >
                            {title}
                        </TextHeader>
                    ) : null}
                    <ScrollView>
                        {items.map((item) => (

                            <Button

                                key={item}
                                onPress={() => handleSelect(item)}
                                variant="primary"
                                style={({ pressed }) => [
                                    {
                                        // override Button defaults for “list row” look
                                        width: '100%',
                                        borderWidth: 0,
                                        padding: 0,
                                        alignItems: 'stretch',
                                    },
                                    // separator line (kept as a view border via container below if desired)
                                ]}
                            >
                                <ThemedView
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingVertical: 14,
                                        paddingHorizontal: 12,
                                        borderRadius: 8,
                                        borderBottomWidth: 1,
                                        borderBottomColor: COLORS[theme].background.secondary,
                                    }}
                                >
                                    <Text style={{ color: COLORS[theme].text.primary, fontSize: FONT.fontSize }}>{item}</Text>
                                    {(selected ?? value) === item ? (
                                        <Text style={{ color: COLORS[theme].text.primary }}>✓</Text>
                                    ) : null}
                                </ThemedView>
                            </Button>
                        ))}
                    </ScrollView>


                    <Button
                        onPress={close}
                        variant="primary"
                        style={{ marginTop: 8, width: '95%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                    >
                        <TextHeader style={{ color: COLORS[theme].text.secondary, fontSize: FONT.fontSize }}>
                            Close
                        </TextHeader>
                    </Button>
                </ThemedView>
            </ModalBottom>
        </>
    );
}
const styles = StyleSheet.create({
    pickerItem: {
        fontSize: FONT.fontSize,
        fontWeight: FONT.fontWeight,
    }
})