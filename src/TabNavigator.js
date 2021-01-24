import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './components/TabBar'
import ProfileNavigator from './stack/ProfileNavigator'
import GratisNavigator from './stack/GratisNavigator'
import MensajeNavigator from './stack/MensajeNavigator'
import PremiumNavigator from './stack/PremiumNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { shouldUseActivityState } from 'react-native-screens'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator tabBar={props => <TabBar {...props} />}>
				<Tab.Screen
					name='Gratis'
					component={GratisNavigator}
					initialParams={{ icon: 'home' }}
				/>
				<Tab.Screen
					name='Premium'
					component={PremiumNavigator}
					initialParams={{ icon: 'plus' }}
				/>
				<Tab.Screen
					name='Mensaje'
					component={MensajeNavigator}
					initialParams={{ icon: 'message1' }}
				/>
				<Tab.Screen
					name='Cuenta'
					component={ProfileNavigator}
					initialParams={{ icon: 'user' }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default TabNavigator
