import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'

const Lista = ({ navigation, premium, data }) => {
	const keyExtractor = (item, index) => index.toString()

	const renderItem = ({ item }) => (
		<TouchableOpacity>
			<View
				style={styles.card}
				onTouchStart={() => {
					navigation.navigate('InfoRutina', { data: item })
				}}
			>
				<Selector item={item} />
			</View>
		</TouchableOpacity>
	)

	const Selector = ({ item }) => {
		if (premium) {
			return (
				<View>
					<Text style={styles.titlesito}>{item.nombre}</Text>
					<Text style={styles.dessito}>{item.des}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text style={styles.title}>{item.nombre}</Text>
					<Text style={styles.des}>{item.des}</Text>
				</View>
			)
		}
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				<FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: '10px',
		flex: 1,
		justifyContent: 'center',
	},
	card: {
		backgroundColor: Colors.red100,
		height: '120px',
		width: '90%',
		marginHorizontal: 'auto',
		marginTop: '0px',
		shadowColor: '#111',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		marginBottom: '40px',
		position: 'relative',
	},
	img: {
		borderRadius: '25px',
	},
	title: {
		marginTop: '5px',
		marginLeft: '200px',
		fontWeight: 'bold',
		fontSize: '20px',
	},
	des: {
		marginTop: '10px',
		marginLeft: '150px',
	},
	titlesito: {
		marginTop: '5px',
		marginLeft: '180px',
		fontWeight: 'bold',
		fontSize: '20px',
	},
	dessito: {
		marginTop: '10px',
		marginLeft: '130px',
	},
})

export default Lista
