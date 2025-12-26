import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "./constants/colors";
import { SPACING } from "./constants/spacing";
import Button from "./ui/Button";
import TextHeader from "./ui/text-header";
import { ThemedSafeAreaView } from "./ui/themed-view";


const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
    const theme = useColorScheme() ?? "light";
    const router = useRouter();

    // const [modalVisible, setModalVisibility] = useState(false);

    return (
        <ThemedSafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: "center",
            paddingHorizontal: 60,
            gap: SPACING.sm,
        }}>
            <Image
                style={styles.image}
                source={require("@assets/images/icon.png")}
                placeholder={{ blurhash }}
                contentFit='contain'
                transition={1000}
            />
            <TextHeader header="header1">Taxi App</TextHeader>
            <Button accessibilityLabel="open-start-journey-form" accessibilityHint="open-start-journey-form" style={{ ...styles.button }} onPress={() => {
                router.push('/start-journey-modal')
            }
            }>
                <TextHeader style={{
                    color: COLORS[theme].text.secondary,
                    textAlign: 'center'
                }} header="header3"> Commencer la journée </TextHeader>
            </Button>
            <Button style={{ ...styles.button }} onPress={() => {
                Alert.alert("Test");
            }
            }>
                <TextHeader style={{
                    color: COLORS[theme].text.secondary,
                    textAlign: 'center'
                }} header="header3"> Historique des journées </TextHeader>
            </Button>
            <Button style={{ ...styles.button }} onPress={() => {
                Alert.alert("Test");
            }
            }>
                <MaterialIcons style={
                    {
                        color: COLORS[theme].text.secondary
                    }
                } size={20} name='logout' />
                <TextHeader style={{
                    color: COLORS[theme].text.secondary,
                    textAlign: 'center'
                }} header="header3"> Déconnexion </TextHeader>
            </Button>
            {/* Just for trying */}
            {/* TODO : The modal is corrupted since I extract the modal out of the form, Hint : I don't see the flex-end justify */}
            {/* <Button style={{ ...styles.button }} onPress={() => setModalVisibility(true)}>
                <TextHeader header="header3"> Commencer la journée </TextHeader>
            </Button>
                <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => {
                    setModalVisibility(false);
                }}>
                <StartJourneyForm />
            </Modal> */}
        </ThemedSafeAreaView >
    )
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
    }
})