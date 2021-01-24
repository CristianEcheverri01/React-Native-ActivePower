import React from 'react'
import { Button, Text, View } from 'react-native'

const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={{ textAlign: 'center', fontSize: 25, marginTop: '50%' }}>Gratis</Text>
			<Button onPress={() => navigation.navigate('pedro')} title='pedro' />
		</View>
	)
}

export default Gratis
