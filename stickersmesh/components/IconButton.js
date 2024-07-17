import {Pressable, StyleSheet, Text} from "react-native";
import MaterialIcons from '@expo/vector-icons'

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }
});

export default function IconButton({icon, label, onPress}) {
    return (
        <Pressable style={style.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={'#fff'}/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}