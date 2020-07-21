import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input : {
        backgroundColor : '#eee',
        height : 34,
        alignSelf : 'stretch',
        padding : 8
    }
})

const Input = ({ onChange, value , onSubmit }) => {
    return (
        <TextInput style={styles.input} onChangeText={onChange} value={value} onSubmitEditing={onSubmit}></TextInput>
    )
}

export default Input;