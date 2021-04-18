/*//importe de expo
import { registerRootComponent } from 'expo'

//importe de archivo App.js
import App from './App'

//creacion de componente principal
registerRootComponent(App)*/

//probando para solucionar el error del AppRegistry.registerComponent
import { AppRegistry, Platform } from 'react-native'
import { registerRootComponent } from 'expo'
import App from './App'
import { name as appName } from './app.json'

if (Platform.OS == 'android' || Platform.OS == 'web') {
	registerRootComponent(App)
} else {
	AppRegistry.registerComponent(appName, () => App)
}
