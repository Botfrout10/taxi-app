import { SPACING } from "@/components/constants/spacing";
import ShowFormButton from "@/components/show-form-button";
import TabsTemplate from "@/components/tabs-template";
import NoteCard from "@/components/ui/note-card";
import { NOTES } from "@/types/notes";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

export default function FraisPage() {
    return (
        <>
            <Tabs.Screen
                options={{
                    headerShown: false
                }} />
            <ShowFormButton path='/tabs-form/note-form' />
            <TabsTemplate >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={NOTES}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={{
                        gap: SPACING.lg,
                    }}
                    renderItem={({ item }) => {
                        return (<NoteCard note={item} />)
                    }} />
            </TabsTemplate>
        </>
    )
}