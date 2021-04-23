/*
---- importaciones utilizados ----
*/
import React, { useState, useEffect } from 'react'
import SplashScreen from './src/pages/Splash'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/TabNavigator'
import MenuHamburguesa from './src/components/MenuHamburguesa'
import { ScreenContainer } from 'react-native-screens'
import InicioNavegation from './src/stack/InicioNavegation'

/* 
---- este es el tiempo que  demora el splahs ----
*/
const App = () => {
	// hocks o estasdos del splhas
	const [splash, setSplash] = useState(true)

	// el tiempo cuando va terminar el splash
	useEffect(() => {
		setTimeout(() => {
			setSplash(false)
		}, 1000)
	})
	return <Selector splash={splash} />
}

// es el condicional que hace que pase al menu
const Selector = ({ splash }) => {
	if (splash) {
		return <SplashScreen />
	} else {
		return (
			<NavigationContainer>
				<InicioNavegation />
			</NavigationContainer>
		)
	}
}

export default App
