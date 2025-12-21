import TextBody from "./ui/text-body";
import TextHeader from "./ui/text-header";
import { ThemedSafeAreaView } from "./ui/themed-view";

export default function Home() {
    return (
        <ThemedSafeAreaView variant="secondary" style={{
            flex : 1,
            justifyContent : 'center',
            alignItems : "center",
        }}>
            <TextHeader header="header1">Header</TextHeader>
            <TextHeader header="header2">Header2</TextHeader>
            <TextHeader header="header3">Header3</TextHeader>
            <TextBody>Hi, Mehdi , Hello world</TextBody>
        </ThemedSafeAreaView>
    )
}