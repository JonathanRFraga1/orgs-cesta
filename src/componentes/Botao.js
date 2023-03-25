import React from "react";
import { TouchableOpacity } from "react-native";

export default function Botao({ children, onPress, estilo, disabled }) {
    disabled = disabled || false;
    return (
        <TouchableOpacity onPress={onPress} style={estilo} disabled={disabled}>
            {children}
        </TouchableOpacity>
    );
}