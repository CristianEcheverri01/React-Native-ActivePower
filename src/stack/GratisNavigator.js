/*
---- importes utilizados ----
*/
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import Gratis from '../pages/Gratis'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
import InfoRutina from '../components/InfoRutina'
import Info from '../pages/Info'
import firebase from '../../database/firebase'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack gratis ----
*/
const GratisNavigator = ({ navigation, route }) => {
	const nav = route.params.navigation
	const [mensaje, setMensaje] = useState([])
	const [showMenu, setShowMenu] = useState(false)

	//custom header
	/*
	-----------------------------------------
		PENDIENTE PARA REVICION PROFUNDA
	-----------------------------------------
	*/

	const CustomHeader = ({ scene, previous, navigation }) => {
		const { options } = scene.descriptor
		const title =
			options.headerTitle !== undefined
				? options.headerTitle
				: options.title !== undefined
				? options.title
				: scene.route.name

		const ruta = previous.route.name
		return (
			<Header
				title={title}
				leftButton={
					ruta == 'registro' || ruta == 'login' ? undefined : (
						<BackBtn onPress={navigation.goBack} />
					)
				}
				style={options.headerStyle}
				navigator={navigation}
			/>
		)
	}

	const Header = ({ title, leftButton, navigator }) => {
		const [value, setValue] = useState('')
		return (
			<ScreenContainer style={styles.bar}>
				<View>
					<Text style={styles.text}>{title}</Text>
					<SelectorBtn leftBtn={leftButton} navigator={navigator} />
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						onChangeText={text => setValue(text)}
						value={value}
					/>
					<AntDesign style={styles.iconSearch} name='search1' size={20} color='black' />
				</View>
			</ScreenContainer>
		)
	}

	const SelectorBtn = ({ leftBtn, navigator }) => {
		if (leftBtn !== undefined) {
			return <BackBtn onPress={navigator.goBack} />
		} else {
			return (
				<IconButton
					style={styles.icon}
					icon={() => <FontAwesome5 name='bars' size={24} color={Colors.amber500} />}
					onPress={() => {
						nav.toggleDrawer()
					}}
				/>
			)
		}
	}

	const BackBtn = ({ onPress }) => {
		return (
			<IconButton
				onPress={onPress}
				icon={() => <AntDesign name='left' size={24} color={Colors.amber500} />}
				style={styles.icon}
			></IconButton>
		)
	}
	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Gratis}
				initialParams={{ data, mensaje, setMensaje }}
				name='Gratis'
				options={{
					title: 'Rutinas gratuitas',
					header: CustomHeader,
				}}
			/>
			<Stack.Screen
				component={InfoRutina}
				name='InfoRutina'
				options={{
					title: 'InfoRutina',
					header: CustomHeader,
				}}
			/>
			<Stack.Screen
				component={Info}
				name='Info'
				options={{
					title: 'Info',
					header: CustomHeader,
				}}
			/>
		</Stack.Navigator>
	)
}

//datos de prueba
const data = [
	{
		img:
			'https://image.freepik.com/foto-gratis/grupo-personas-haciendo-ejercicios-calentamiento-gimnasio_23-2147949530.jpg',
		nombre: 'imagenDeSuperacion1',
		des:
			'Esta rutina es pensada para los principiantes, para entrenar todo el cuepesillo. ',
	},
	{
		img:
			'https://image.freepik.com/vector-gratis/establecer-personas-haciendo-ejercicio_18591-36176.jpg',
		nombre: 'imagenDeSuperacion2',
		des: 'no hay nada de que hablar pa. ',
	},
]

//mensages

const getMesanjes = async () => {}

//estilos de stack gratis
const styles = StyleSheet.create({
	bar: {
		height: '50px',
		position: 'relative',
		display: 'flex',
	},
	text: {
		marginLeft: '50px',
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
export default GratisNavigator
