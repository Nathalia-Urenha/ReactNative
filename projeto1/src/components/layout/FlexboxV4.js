import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  return(
    <View style={style.FlexV4}>
      <View style={style.V0}/>
      <View style={style.V1}/>
      <View style={style.V2}/>
    </View>

  ) 
};

//eixo cruzado
//align itens: eixo cruzado
//align Content: eixo principal
const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0:{
    backgroundColor: '#dd22c1',
    height: 300,
  },
  V1:{
    backgroundColor: '#ff801a',
    flexGrow: 9,
  },
  V2:{
    backgroundColor: '#50d1f6',
    flexGrow: 1,
  },
});
