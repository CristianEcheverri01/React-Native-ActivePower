/*
---- archivo de pruebas para testear cualquier funcion y/o componente ----
*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'
import GratisNavigator from '../stack/GratisNavigator'
import PremiumNavigation from '../stack/PremiumNavigator'
import Inicio from '../pages/Inicio'

const Tab = createBottomTabNavigator()

const Test = () => (
	<Tab.Navigator>
		<Tab.Screen name='principal' component={GratisNavigator} />
		<Tab.Screen name='second' component={PremiumNavigation} />
	</Tab.Navigator>
)

export default Test
