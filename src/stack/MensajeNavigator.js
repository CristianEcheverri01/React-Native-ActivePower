/*
---- importes utilizados ----
*/
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Mensaje from '../pages/Mensaje'
import Chat from '../pages/Chat'
import { StyleSheet } from 'react-native'
import HeaderStack from '../components/HeaderStack'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack mensaje ----
*/
const MensajeNavigator = ({ navigation, route }) => {
	const nav = route.params.navigation

	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Mensaje'
				component={Mensaje}
				initialParams={data}
				options={{
					title: 'Chats',
					header: HeaderStack,
				}}
			/>
			<Stack.Screen
				name='Sala'
				component={Chat}
				options={{
					title: 'Sala',
					header: HeaderStack,
				}}
			/>
		</Stack.Navigator>
	)
}

//datos de prueba

const data = [
	{
		nombre: 'Sala 1',
		online: 40,
	},
	{
		nombre: 'Sala 2',
		online: 12,
	},
]

//estilos de stack mensaje
const styles = StyleSheet.create({
	bar: {
		height: '50px',
		position: 'relative',
		display: 'flex',
	},
	text: {
		marginLeft: '130px',
		marginTop: '12px',
		fontWeight: 'bold',
		fontSize: 18,
	},
	icon: {
		padding: 0,
		margin: 0,
		position: 'absolute',
		left: 0,
		top: '7px',
	},
	inputContainer: {
		position: 'absolute',
		top: '7px',
		right: '5px',
	},
	textInput: {
		borderWidth: 1,
		height: '30px',
		width: '80px',
		borderRadius: 25,
		textAlign: 'center',
	},
	iconSearch: {
		position: 'absolute',
		right: '10px',
		top: '3px',
	},
})
export default MensajeNavigator
