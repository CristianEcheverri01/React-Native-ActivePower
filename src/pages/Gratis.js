/*
---- importes utilizados ----
*/
import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Lista from '../components/Lista'
import MenuHamburguesa from '../components/MenuHamburguesa'
import firebase from '../../database/firebase'
/*
---- vista de rutinas gratis ----
*/
const Gratis = ({ navigation, route }) => {
	const [dato, setDato] = useState({ msg: '' })
	const mensajes = []

	firebase.db.collection('mensaje').onSnapshot(query => {
		query.docs.forEach(doc => {
			mensajes.push(doc.data().msg)
		})
	})

	let min = 0
	let max = 3
	let numero = Math.floor(Math.random() * (max - min) + min)

	useEffect(() => {
		setDato(mensajes[numero])
		console.log(dato)
	}, [])

	return (
		<View>
			<Text id='text' style={Styles.text}>
				oe
			</Text>
			<Lista navigation={navigation} data={route.params.data} />
		</View>
	)
}

//estilos de Gratis
const Styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 25,
		margin: 20,
		fontWeight: '400',
	},
})

export default Gratis
