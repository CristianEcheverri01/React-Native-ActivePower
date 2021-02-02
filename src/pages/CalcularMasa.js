import React from 'react'
import { View } from 'react-native'
import Nav from '../components/Drawer/Nav'

const CalculaMasa = ({ navigation, route }) => {
	return (
		<View>
			<Nav navigation={navigation} title='Conoce tu indice corporal' />
		</View>
	)
}

export default CalculaMasa
