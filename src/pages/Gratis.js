import React from 'react'
import { Button, Text, View, Image } from 'react-native'
import Lista from '../components/Lista'
import img from '../img/download.jpg'

const Gratis = ({ navigation, route }) => {
	return (
		<View>
			<Text style={{ textAlign: 'center', fontSize: 25, marginTop: '20px' }}>
				Mensaje motivador
			</Text>
			<Image source={img} />
			<Lista navigation={navigation} data={route.params.data} />
			<Button onPress={() => navigation.navigate('pedro')} title='pedro' />
		</View>
	)
}

export default Gratis
