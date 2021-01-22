import React from 'react'
import { Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

export default class Lista extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lista: [
				{ nombre: 'hola' },
				{ nombre: 'lolo' },
				{ nombre: 'pedro' },
				{ nombre: 'lola' },
				{ nombre: 'loca' },
				{ nombre: 'salchicha' },
				{ nombre: 'su papa' },
				{ nombre: 'nacional' },
			],
		}
	}

	renderItem = ({ item }) => (
		<TouchableOpacity>
			<View>
				<View />
				<Text>{item.nombre}</Text>
			</View>
		</TouchableOpacity>
	)

	keyExtractor = (item, index) => index.toString()

	render() {
		return (
			<View>
				<Text>listica de nombres</Text>
				<FlatList
					keyExtractor={this.keyExtractor}
					data={this.state.lista}
					renderItem={this.renderItem}
				/>
			</View>
		)
	}
}
