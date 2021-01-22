import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Mensaje from '../pages/Mesaje'

const Stack = createStackNavigator()

const MensajeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Mensaje' component={Mensaje} />
		</Stack.Navigator>
	)
}
export default MensajeNavigator
