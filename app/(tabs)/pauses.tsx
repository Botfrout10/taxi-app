import { SPACING } from "@/components/constants/spacing";
import ShowFormButton from "@/components/show-form-button";
import TabsTemplate from "@/components/tabs-template";
import PauseCard from "@/components/ui/pause-card";
import { PAUSES } from "@/types/pause";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

export default function PausesPage() {
    return (
        <>
            <Tabs.Screen options={{ headerShown: false }} />
            <ShowFormButton path='/tabs-form/pause-form' />
            <TabsTemplate title="Pauses">
                <FlatList showsVerticalScrollIndicator={false} data={PAUSES} keyExtractor={(item) => String(item.id)} contentContainerStyle={{ gap: SPACING.sm, paddingBottom: 20 }} renderItem={({ item }) => <PauseCard pause={item} />} />
            </TabsTemplate>
        </>
    );
}
