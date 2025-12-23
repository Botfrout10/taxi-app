import { Modal, ModalProps, View } from "react-native";

export default function ModalBottom({ children, ...props }: ModalProps) {
    return (
        <Modal {...props}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                {children}
            </View>
        </Modal>
    )
}