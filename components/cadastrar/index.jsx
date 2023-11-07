import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Pressable, Alert, Text } from 'react-native';

import Parse, { javaScriptKey } from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';

// linkar com o Back4App
Parse.setAsyncStorage(AsyncStorage);
const Api_ID = 'Ee9V8GCalYnEgCtvlQBbYU9UivXMJUxr88fozCzr';
const JS_Key = 'lIW3XROlMTu16ACc1liW5fvmYpAPok4jLdNOntmf';
Parse.initialize(Api_ID, JS_Key);
Parse.serverURL = 'https://parseapi.back4app.com/';



export default function Cadastrar() {
 
  return (
    <SafeAreaView style={styles.container__safe}>
      <View style={styles.container}>

        <TextInput
        placeholder={'Produto'}
        style={styles.input}
        />

        <TextInput
        placeholder={'Valor R$0,00'}
        style={styles.input}
        numeric
        keyboardType={'numeric'}
        />

        <TextInput
        placeholder={'Quantidade'}
        style={styles.input}
        numeric
        keyboardType={'numeric'}
        />

      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container__safe:{
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 44,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
