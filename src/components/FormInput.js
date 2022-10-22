import * as React from "react";
import {View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TextInput, Text} from 'react-native';

const FormInput = (props) => {
    const {placeholder, title, error} = props
    return (
        <>
        <View style={{justifyContent:"space-between"}}>
            <Text style={styles.textGrey}>{title}</Text>
            {error ? (<Text style={{color: 'red', fontSize: 12}}>{error}</Text>): null}
        </View>
            <TextInput {...props} placeholder={placeholder} style={styles.textInput} />
        </>
    )
}

const styles = StyleSheet.create({
textGrey: {
    fontSize: 15,
    color: "gray",
    marginTop: 20,
},

textInput: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "#fff",
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 10,
    borderRadius: 30,
    color: 'grey',
}

})
export default FormInput;