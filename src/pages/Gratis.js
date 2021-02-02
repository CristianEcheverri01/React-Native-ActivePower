import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Lista from '../components/Lista'
import MenuHamburguesa from '../components/MenuHamburguesa'

const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={Styles.text}>{route.params.msg.msg}</Text>
			<Lista navigation={navigation} data={route.params.data} />
		</View>
	)
}

const Styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 25,
		margin: 20,
		fontWeight: '400',
	},
})

export default Gratis
