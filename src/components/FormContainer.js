import * as React from "react";
import {View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform} from 'react-native';

const FormContainer = ({children}) => {
    return (
        <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? "padding": null
        }style={sytles.container}>
            {children}
        </KeyboardAvoidingView>
    )
}

const sytles = StyleSheet.create({
    container:{
        alignItems: "center",
        width: Dimensions.get('window').width,
    }
})

export default FormContainer;