import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

const largura = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * largura
    },
    titulo: {
        width: '100%',
        color: '#fff',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        padding: 16,
        fontWeight: 'bold',
    },
});