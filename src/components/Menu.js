import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Lista from './Lista'
import Gratis from '../pages/Gratis'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

const Menu = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='gratis' component={Gratis} />
			<Drawer.Screen name='Lista' component={Lista} />
		</Drawer.Navigator>
	)
}

export default Menu
