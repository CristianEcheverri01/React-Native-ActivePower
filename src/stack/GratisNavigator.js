import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Gratis from '../pages/Gratis'

const Stack = createStackNavigator()

const GratisNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Gratis' component={Gratis} />
		</Stack.Navigator>
	)
}
export default GratisNavigator
