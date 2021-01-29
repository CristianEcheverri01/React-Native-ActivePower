import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { Animated } from 'react-native'

const { width, height } = Dimensions.get('window')

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const CarouselItem = ({ item }) => {
	return (
		<View style={styles.cardView}>
			<Image style={styles.image} source={{ uri: item.img }} />
			<View style={styles.textView}>
				<Text style={styles.itemTitle}> {item.nombre}</Text>
				<Text style={styles.itemDescription}></Text>

				<AnimatedLinearGradient
					colors={['#e8b923', '#fea724']}
					style={{ width: '100%', zIndex: 1, borderRadius: 25 }}
				>
					<Button
						title='Entra'
						titleStyle={styles.btnTitle}
						buttonStyle={styles.btn}
					></Button>
				</AnimatedLinearGradient>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardView: {
		flex: 1,
		width: width - 20,
		height: height / 3,
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0.5, height: 0.5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 5,
	},
	textView: {
		position: 'absolute',
		bottom: 10,
		margin: 10,
		left: 5,
	},
	image: {
		width: width - 20,
		height: height / 3,
		borderRadius: 10,
	},
	itemTitle: {
		color: 'white',
		fontSize: 22,
		shadowOffset: { width: 0.8, height: 0.8 },
		shadowOpacity: 1,
		shadowRadius: 3,
		marginBottom: 5,
		fontWeight: 'bold',
		elevation: 5,
		textShadowColor: '#000',
	},
	itemDescription: {
		color: 'white',
		fontSize: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0.8, height: 0.8 },
		shadowOpacity: 1,
		shadowRadius: 3,
		elevation: 5,
	},
	btn: {
		backgroundColor: 'rgba(0,0,0,0)',
		borderRadius: 25,
	},
	btnTitle: {
		color: 'black',
		fontWeight: '400',
	},
})

export default CarouselItem
