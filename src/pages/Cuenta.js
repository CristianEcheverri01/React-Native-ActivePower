/*
---- importes utilizados ----
*/
import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import firebase from '../../database/firebase'

//agregar 1 registro a la coleccion usuario
const nuevoUsuario = async () => {
	await firebase.db.collection('usuario').add({
		nombre: 'prueba',
		apellido: 'rodrigo',
		contraseña: '123',
		numero: '132456789',
	})
}

/*
---- vista de cuenta ----
*/
const Cuenta = () => {
	return (
		<View>
			<Text>Cuenta</Text>
			<Button title='agg usuario' onPress={() => nuevoUsuario()} />
		</View>
	)
}

export default Cuenta
