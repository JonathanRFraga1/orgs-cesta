import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import Texto from '../../componentes/Texto';

import logo from '../../../assets/logo.png';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Item from './Componentes/Item';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Cesta({topo, detalhes, itens}) {
    return (
        <>
            <FlatList 
                data={itens.lista} 
                renderItem={Item} 
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo}/>
                            <View style={estilos.cesta}>
                                <Detalhes  {...detalhes}/>
                                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                            </View>
                        </>
                    );
                }}/>
        </>
    );
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    }
});