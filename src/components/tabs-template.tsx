import { useRoute } from "@react-navigation/native"
import { useRouter } from "expo-router"
import { ReactElement } from "react"
import { SPACING } from "./constants/spacing"
import Button from "./ui/Button"
import TextBody from "./ui/text-body"
import TextHeader from "./ui/text-header"
import ThemedView, { ThemedSafeAreaView } from "./ui/themed-view"

type Props = {
    children: ReactElement;
}

export default function TabsTemplate({ children }: Props) {
    const router = useRouter()
    const route = useRoute()
    return (
        <ThemedSafeAreaView style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 20,
            gap: SPACING.xl
        }}>
            <ThemedView style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TextHeader header='header2' style={{
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }} >{route.name}</TextHeader>
                <Button
                    onPress={() => {
                        router.push('/')
                    }}
                    style={{
                        width: "auto"
                    }}>
                    <TextBody variant='secondary'>Fin de journée</TextBody>
                </Button>
            </ThemedView>
            {children}
        </ThemedSafeAreaView>)
}