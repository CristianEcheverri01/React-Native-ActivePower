import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListaChatEntrenador from '../components/ListaChatEntrenador'

const Mensaje = ({ navigation, route }) => {
	return (
		<View>
			<Text style={styles.principalText}>Chat con entrenador</Text>
			<ListaChatEntrenador navigation={navigation} data={data} />
		</View>
	)
}

const data = [
	{
		nombre: 'Daniel Stiven Agudelo',
		img:
			'https://duemosli.blogs.uv.es/files/2019/01/Requisitos-estudios-y-cursos-para-ser-entrenador-de-f%C3%BAtbol.jpg',
	},
	{
		nombre: 'nombre',
		img:
			'https://www.clikisalud.net/wp-content/uploads/2019/08/consejos-top-entrenadores-personales-hacer-ejercicio.jpg',
	},
]

const styles = StyleSheet.create({
	principalText: {
		textAlign: 'center',
		marginTop: '50px',
		fontSize: 25,
		marginBottom: 25,
	},
})

export default Mensaje
