import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Premium from '../pages/Premium'

const Stack = createStackNavigator()

const PremiumNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Premium' component={Premium} />
		</Stack.Navigator>
	)
}
export default PremiumNavigator
