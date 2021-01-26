import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { createIconSetFromFontello } from 'react-native-vector-icons'

const InfoRutina = ({ navigation, route }) => {
	const data = route.params.data
	return (
		<ScrollView>
			<View>
				<Text>{data.nombre}</Text>
				<Text>{data.des}</Text>
			</View>
		</ScrollView>
	)
}

export default InfoRutina
