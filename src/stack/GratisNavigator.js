import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import Gratis from '../pages/Gratis'
import { Button, Text, View } from 'react-native'

const Stack = createStackNavigator()

const GratisNavigator = ({ styles }) => {
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
					header: header,
				}}
			/>
			<Stack.Screen
				component={Gratis}
				name='pedro'
				options={{
					title: 'pedro',
				}}
			/>
		</Stack.Navigator>
	)
}

//custom header

const header = ({ scene, previous, navigation }) => {
	const { options } = scene.descriptor
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name

	return (
		<HeaderBtn
			title={title}
			leftButton={previous ? <BackBtn onPress={navigation.goBack} /> : undefined}
			style={options.headerStyle}
			navigator={navigator}
		/>
	)
}

const HeaderBtn = ({ title }) => {
	return (
		<View>
			<Text>{title}</Text>
			<Button onPress={() => console.log('oe')} title={Icon}></Button>
		</View>
	)
}

const Icon = () => <FontAwesome5 name='bars' size={24} color='black' />
const BackBtn = () => (
	<Button>
		<AntDesign name='back' size={24} color='black' />
	</Button>
)

export default GratisNavigator
