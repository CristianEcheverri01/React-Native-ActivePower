import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import Gratis from '../pages/Gratis'
import Lista from '../components/Lista'
import { Button, StyleSheet, Text, View } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'

const Stack = createStackNavigator()

const GratisNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					alignItems: 'center',
					justifyContent: 'center',
				},
				headerTintColor: '#111',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				component={Gratis}
				name='Gratis'
				options={{
					title: 'Rutinas gratuitas',
					header: CustomHeader,
				}}
			/>
			<Stack.Screen
				component={Lista}
				name='pedro'
				options={{
					title: 'pedro',
					header: CustomHeader,
				}}
			/>
		</Stack.Navigator>
	)
}

//custom header

const CustomHeader = ({ scene, previous, navigation }) => {
	const { options } = scene.descriptor
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name

	return (
		<Header
			title={title}
			leftButton={previous ? <BackBtn onPress={navigation.goBack} /> : undefined}
			style={options.headerStyle}
			navigator={navigator}
		/>
	)
}

const Header = ({ title, leftButton }) => {
	return (
		<View style={styles.bar}>
			<Text style={styles.text}>{title}</Text>

			{leftButton}
		</View>
	)
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

const IconBars = () => <FontAwesome5 name='bars' size={24} color='black' />

const styles = StyleSheet.create({
	bar: {
		backgroundColor: Colors.red200,
		height: '50px',
		position: 'relative',
		borderBottomColor: Colors.black,
	},
	text: {
		marginLeft: '35px',
		marginTop: '12px',
		fontWeight: 'bold',
		fontSize: '18px',
	},
	icon: {
		padding: 0,
		margin: 0,
		position: 'absolute',
		left: 0,
		top: '7px',
	},
})

export default GratisNavigator
