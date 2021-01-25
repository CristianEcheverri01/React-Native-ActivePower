import React from 'react'
import { Button, Text, View } from 'react-native'
import Lista from '../components/Lista'

const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={{ textAlign: 'center', fontSize: 25, marginTop: '20px' }}>
				Mensaje motivador
			</Text>
			<Lista />
			<Button onPress={() => navigation.navigate('pedro')} title='pedro' />
		</View>
	)
}

export default Gratis
