import React from 'react'
import { Button, Text, View } from 'react-native'
import Lista from '../components/Lista'

const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={{ textAlign: 'center', fontSize: 25, marginTop: '20px' }}>
				Mensaje motivador
			</Text>
			<Lista navigation={navigation} data={route.params.data} />
		</View>
	)
}

export default Gratis
