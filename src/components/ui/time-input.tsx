import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { FONT } from "../constants/font";
import { InputContainer } from "./input-text";
import TextBody from "./text-body";

export default function TimeInput() {
    const theme = useColorScheme() ?? 'light';

    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        setShow(false);
        setDate(selectedDate ?? new Date());
    };
    return (
        <InputContainer style={[styles.timePicker]}>
            <TextBody style={
                {
                    color: COLORS[theme].background.primary,
                    fontSize: FONT.fontSize,
                    fontWeight: FONT.fontWeight,
                }
            } >{date?.toLocaleTimeString()}</TextBody>
            <Pressable onPress={() => setShow(true)}>
                <MaterialIcons style={
                    {
                        color: COLORS[theme].background.primary,
                    }
                } size={20} name='timer' />
            </Pressable>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date ?? new Date()}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChange}
                    display='clock'
                />
            )}
        </InputContainer>)
}

const styles = StyleSheet.create({
    timePicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 2,
    },
})