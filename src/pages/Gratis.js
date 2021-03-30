/*
---- importes utilizados ----
*/
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Lista from '../components/Lista'
import MenuHamburguesa from '../components/MenuHamburguesa'

/*
---- vista de rutinas gratis ----
*/
const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={Styles.text}>{route.params.msg.msg}</Text>
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
