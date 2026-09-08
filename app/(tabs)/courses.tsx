import { SPACING } from "@/components/constants/spacing";
import ShowFormButton from "@/components/show-form-button";
import TabsTemplate from "@/components/tabs-template";
import CourseCard from "@/components/ui/course-card";
import { COURSES } from "@/types/course";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

export default function CoursesPage() {
    return (
        <>
            <Tabs.Screen options={{ headerShown: false }} />
            <ShowFormButton path='/tabs-form/course-form' />
            <TabsTemplate title="Courses">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={COURSES}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={{ gap: SPACING.sm, paddingBottom: 20 }}
                    renderItem={({ item }) => <CourseCard course={item} />}
                />
            </TabsTemplate>
        </>
    );
}
