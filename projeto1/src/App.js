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
//import Diferenciar from './components/Diferenciar';
//import ParImpar from './components/ParImpar';
//import Pai from './components/relacao/Pai';
//import Filho from './components/relacao/Filho';
//import UsuarioLogado from './components/UsuarioLogado';
//import ListaProdutos from './components/produtos/ListaProdutos';
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';

//componente baseado em função
export default () => (
  <SafeAreaView style={style.App}>
    <DigiteSeuNome />
    {/*
    <ListaProdutosV2 />
    <ListaProdutos />
     <UsuarioLogado
      usuario={{nome: 'Nathalia', email: 'naty.urenha@gmail.com'}}
    />
    <UsuarioLogado usuario={{nome: 'Ana'}} />
    <UsuarioLogado usuario={{email: 'igorsolfaromero@gmail.com'}} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />

    <Pai>
      <Filho nome="Nathalia" sobrenome="Urenha" />
      <Filho nome="Igor" sobrenome="Romero" />
    </Pai>

    <Pai>
      <Filho nome="Aurora" sobrenome="Urenha Romero" />
      <Filho nome="Igor" sobrenome="Urenha Romero Junior" />
    </Pai>
    <ParImpar num={3} />
    <Diferenciar />
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
