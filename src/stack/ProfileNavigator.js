import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import Cuenta from '../pages/Cuenta'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'

const Stack = createStackNavigator()

const ProfileNavigator = ({ navigation, route }) => {
	const nav = route.params.navigation

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
				component={Cuenta}
				name='Cuenta'
				options={{
					title: 'Perfil',
					header: CustomHeader,
				}}
			/>
		</Stack.Navigator>
	)
}

//styles
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
		fontSize: '18px',
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
		borderRadius: '25px',
		textAlign: 'center',
	},
	iconSearch: {
		position: 'absolute',
		right: '10px',
		top: '3px',
	},
})
export default ProfileNavigator
