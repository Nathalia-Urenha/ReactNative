import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import Primeiro from './components/Primeiro';
//import X, {Comp1, Comp2} from './components/Multi';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import Titulo from './components/Titulo';
//import Botao from './components/Botao';
//import Contador from './components/Contador';
//import Pai from './components/direta/Pai';
//import Pai from './components/indireta/Pai';
//import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';

//componente baseado em função
export default () => (
  <SafeAreaView style={style.App}>
    <Diferenciar />
    {/*
    <ContadorV2 />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do produto"
    />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max="20" />
    <MinMax min="1" max="94" />
    <X />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);
const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
