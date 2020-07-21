
import  React, { useState } from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './components/ListItem';
import {completado , submit } from './reducers/prueba';
import Input from './components/Input'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop : 30
  },
  list : {
    alignSelf : 'stretch'
  }
});

const App = ({ data , completado , submit }) =>{
  const [value , setValue ] = useState(''); 
  // esto es un hook para actualizar el estado
  const handleChange = (val) => {
    console.log(val);
    setValue(val);
  }
  const handleSubmit =()=>{
    submit(value);
    setValue('');
  }
  return (
    <View style={styles.container}>
      <Input onSubmit={ handleSubmit } onChange={ handleChange} value={value}/>
      <FlatList 
        style={styles.list}
        data={data}
        keyExtractor={x=> String(x.id)}
        renderItem={({item })=>
          <ListItem completado={item.completado} onPress={()=>completado(item.id)} desc={item.desc} />} 
        />
    </View>
  );
}

const mapStateToProps = state => {
  //console.log(state);
  return { data : state.prueba} 
}
// despacha accion
const mapDispatchToProps = dispatch => ({
  completado : (id) => dispatch(completado(id)),
  submit : (val) => dispatch(submit(val))
})
export default connect(mapStateToProps, mapDispatchToProps )(App);