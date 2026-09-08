import { SPACING } from "@/components/constants/spacing";
import ShowFormButton from "@/components/show-form-button";
import TabsTemplate from "@/components/tabs-template";
import FraisCard from "@/components/ui/frais-card";
import { FRAIS } from "@/types/frais";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

export default function FraisPage() {
    return (
        <>
            <Tabs.Screen options={{ headerShown: false }} />
            <ShowFormButton path='/tabs-form/frais-form' />
            <TabsTemplate title="Frais">
                <FlatList showsVerticalScrollIndicator={false} data={FRAIS} keyExtractor={(item) => String(item.id)} contentContainerStyle={{ gap: SPACING.sm, paddingBottom: 20 }} renderItem={({ item }) => <FraisCard frais={item} />} />
            </TabsTemplate>
        </>
    );
}
