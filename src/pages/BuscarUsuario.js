import React from 'react'
import { Text, View } from 'react-native'
import Nav from '../components/Drawer/Nav'

const BuscarUsuario = ({ navigation, route }) => {
	return (
		<View>
			<Nav navigation={navigation} title='Buscar Usuario' />
		</View>
	)
}

export default BuscarUsuario
