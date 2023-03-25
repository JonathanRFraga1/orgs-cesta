import React, { useState } from "react";

import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes({ nome, nomeFazenda, logoFazenda, descricao, preco, botao, botaoCestaNoCarrinho, textoAlerta }) {
    const [onCart, setOnCart] = useState(false);
    const [textButton, setTextButton] = useState(botao);

    function insereCestaCarrinho() {
        alert(textoAlerta);
        setOnCart(true);
        setTextButton(botaoCestaNoCarrinho);
    }

    return (
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>
                {descricao}
            </Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Botao estilo={estilos.botao} onPress={() => { insereCestaCarrinho() }} disabled={onCart}>
                <Texto style={estilos.textoBotao}>{textButton}</Texto>
            </Botao>
        </>
    );
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2a9d85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 12,
        borderRadius: 6,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
    }
});