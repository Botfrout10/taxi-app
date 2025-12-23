import { Picker, PickerProps } from "@react-native-picker/picker";
import { StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { FONT } from "../constants/font";

type InputPiCkerProps = Omit<PickerProps, 'dropDownIconColor' & 'style'> & {
    items: Array<string>
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
                        label={car} value={car} />
                )
            }
        </Picker>
    )
}

const styles = StyleSheet.create({
    pickerItem: {
        fontSize: FONT.fontSize,
        fontWeight: FONT.fontWeight,
    }
})