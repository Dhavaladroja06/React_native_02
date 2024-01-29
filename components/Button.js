import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
const Button = (props) => {
    const filledBgColor = props.color || Colors.primary;
    const outlinedColor = Colors.white_color;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? Colors.white_color : Colors.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button