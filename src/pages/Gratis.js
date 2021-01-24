import React from 'react'
import { Button, Text, View } from 'react-native'
import Menu from '../components/Menu'

const Gratis = ({ navigate }) => {
	return (
		<View>
			<Menu />
			<Text style={{ textAlign: 'center', fontSize: 25, marginTop: '50%' }}>Gratis</Text>
			<Button onPress={() => navigate.navigador('pedro')} title='olero' />
		</View>
	)
}

export default Gratis
