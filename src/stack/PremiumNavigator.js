/*
---- importes utilizados ----
*/
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
import Premium from '../pages/Premium'

//instanciacion de stack
const Stack = createStackNavigator()

/*
---- stack Premium ----
*/
const PremiumNavigator = ({ navigation, route }) => {
	const nav = route.params.navigation

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
			console.log(navigator)
			return <BackBtn onPress={navigator.goBack} />
		} else {
			return (
				<IconButton
					style={styles.icon}
					icon={() => <FontAwesome5 name='bars' size={24} color={Colors.amber600} />}
					onPress={() => nav.toggleDrawer()}
				/>
			)
		}
	}

	const BackBtn = ({ onPress }) => {
		return (
			<IconButton
				onPress={onPress}
				icon={() => <AntDesign name='left' size={24} color='black' />}
				style={styles.icon}
			></IconButton>
		)
	}

	return (
		<Stack.Navigator>
			<Stack.Screen
				component={Premium}
				name='Premium'
				initialParams={{ data: data }}
				options={{
					title: 'Premium',
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
		nombre: 'loquito',
		des:
			'Esta rutina es pensada para los principiantes, para entrenar todo el cuepesillo. ',
	},
	{
		img:
			'https://image.freepik.com/vector-gratis/establecer-personas-haciendo-ejercicio_18591-36176.jpg',
		nombre: 'prueba',
		des: 'no hay nada de que hablar pa. ',
	},
]

//estilos de stack premium
const styles = StyleSheet.create({
	bar: {
		height: '50px',
		position: 'relative',
		display: 'flex',
	},
	text: {
		marginLeft: '125px',
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
export default PremiumNavigator
