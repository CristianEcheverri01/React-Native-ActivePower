import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cuenta from '../pages/Cuenta'

const Stack = createStackNavigator()

const ProfileNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Cuenta' component={Cuenta} />
		</Stack.Navigator>
	)
}
export default ProfileNavigator
