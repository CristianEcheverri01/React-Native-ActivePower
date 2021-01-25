import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
import Lista from '../components/Lista'

const Premium = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text>Nivel Principiante</Text>
				<Lista premium='true' />
			</View>
			<View style={styles.container}>
				<Text>Nivel Medio</Text>
				<Lista premium='true' />
			</View>
			<View style={styles.container}>
				<Text>Nivel Avanzado</Text>
				<Lista premium='true' />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 'auto',
		marginTop: '20px',
		backgroundColor: Colors.green200,
		width: '90%',
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
})

export default Premium
