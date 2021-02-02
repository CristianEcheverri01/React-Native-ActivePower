import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import ListaChatEntrenador from '../components/ListaChatEntrenador'

const Mensaje = ({ navigation, route }) => {
	const salas = route.params
	return (
		<View>
			<Text style={styles.principalText}>Chat con entrenador</Text>
			<ListaChatEntrenador navigation={navigation} data={data} />
			<Text style={styles.principalText}>Salas sociales</Text>
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>{salas[0].nombre}</Text>
					<Button
						title='power'
						buttonStyle={styles.cardBtn}
						titleStyle={{ color: Colors.black }}
						onPress={() => {
							navigation.navigate('Sala')
						}}
					/>
					<Text style={styles.cardFooter}>online {salas[0].online}</Text>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>{salas[1].nombre}</Text>
					<Button
						title='power'
						buttonStyle={styles.cardBtn}
						titleStyle={{ color: Colors.black }}
					/>
					<Text style={styles.cardFooter}>online {salas[1].online}</Text>
				</View>
			</View>
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
		nombre: 'Santiago Ceballos',
		img:
			'https://www.clikisalud.net/wp-content/uploads/2019/08/consejos-top-entrenadores-personales-hacer-ejercicio.jpg',
	},
	{
		nombre: 'Cristian Echeverri',
		img:
			'https://duemosli.blogs.uv.es/files/2019/01/Requisitos-estudios-y-cursos-para-ser-entrenador-de-f%C3%BAtbol.jpg',
	},
	{
		nombre: 'Johan Stiven Murillo',
		img:
			'https://www.clikisalud.net/wp-content/uploads/2019/08/consejos-top-entrenadores-personales-hacer-ejercicio.jpg',
	},
]

const styles = StyleSheet.create({
	principalText: {
		textAlign: 'center',
		marginTop: '20px',
		fontSize: 22,
		marginBottom: 25,
		fontWeight: '500',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	card: {
		margin: 10,
		width: 150,
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
	cardBtn: {
		margin: 'auto',
		marginTop: '15px',
		width: '60%',
		backgroundColor: Colors.deepOrange200,
		borderRadius: 15,
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 'auto',
		marginTop: '5px',
	},
	cardFooter: {
		marginTop: '15px',
		marginLeft: '15px',
		marginBottom: '10px',
		color: Colors.greenA700,
	},
})

export default Mensaje
