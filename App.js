import React, { useState, useEffect } from 'react'
import SplashScreen from './src/pages/Splash'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/TabNavigator'
import MenuHamburguesa from './src/components/MenuHamburguesa'
import { ScreenContainer } from 'react-native-screens'

const App = () => {
	//renderizado del splash
	const [splash, setSplash] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setSplash(false)
		}, 1000)
	})
	return <Selector splash={splash} />
}

const Selector = ({ splash }) => {
	if (splash) {
		return <SplashScreen />
	} else {
		return (
			<NavigationContainer>
				<MenuHamburguesa />
			</NavigationContainer>
		)
	}
}

export default App
