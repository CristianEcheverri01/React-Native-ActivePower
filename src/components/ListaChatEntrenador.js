import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Carousel from './carousel/Carousel'

const ListaChatEntrenador = ({ navigation, data }) => {
	return (
		<View>
			<Carousel data={data} />
		</View>
	)
}

export default ListaChatEntrenador
