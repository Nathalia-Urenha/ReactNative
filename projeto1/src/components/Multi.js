import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default function () {
  return <Text style={Estilo.txtG}>Comp #Oficial</Text>;
}

export function Comp1() {
  return <Text style={Estilo.txtG}>Comp #01</Text>;
}

export function Comp2() {
  return <Text style={Estilo.txtG}>Comp #02</Text>;
}
