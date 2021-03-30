/*
---- importes utilizados ----
*/
import React from 'react'
import { Image, Text, View } from 'react-native'
import { useFonts } from 'expo-font'

/*
---- vista del splash ----
*/
const Splash = () => {
	try {
		const [loaded, err] = useFonts({
			Oswald: require('../fonts/Oswald-Medium.ttf'),
		})
	} catch (error) {
		console.log(error)
	}

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={require('../img/logo(AP){mini}.svg')}
				resizeMode='center'
				style={{
					width: '100%',
					height: '500px',
					margin: 'auto',
					marginTop: '15px',
				}}
			/>
			<Text
				style={{
					fontSize: '35px',
					textAlign: 'center',
					position: 'absolute',
					top: '70%',
					fontFamily: 'Oswald',
				}}
			>
				Active Power
			</Text>
		</View>
	)
}

export default Splash
