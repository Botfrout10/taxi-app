import { SPACING } from "@/components/constants/spacing";
import ShowFormButton from "@/components/show-form-button";
import TabsTemplate from "@/components/tabs-template";
import PauseCard from "@/components/ui/pause-card";
import { PAUSES } from "@/types/pause";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

export default function FraisPage() {
    return (
        <>
            <Tabs.Screen
                options={{
                    headerShown: false
                }} />
            <ShowFormButton path='/tabs-form/pause-form' />
            <TabsTemplate >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={PAUSES}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={{
                        gap: SPACING.lg,
                    }}
                    renderItem={({ item }) => {
                        return (<PauseCard pause={item} />)
                    }} />
            </TabsTemplate>
        </>
    )
}