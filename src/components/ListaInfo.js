/*
---- importes utilizados ---- 
*/
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

/*
---- renderizado de la lista de la vista inforRutina
*/
const ListaInfo = ({ navigation, premium, data }) => {
	const keyExtractor = (item, index) => index.toString()

	/*
	---- visualizacion de item
	*/
	const renderItem = ({ item }) => {
		console.log(item)
		return (
			<TouchableOpacity>
				<View
					style={styles.card}
					onTouchStart={() => {
						navigation.navigate('Info', { data: item })
					}}
				>
					<Image source={{ uri: item.img }} style={styles.img} />
					<Selector item={item} />
				</View>
			</TouchableOpacity>
		)
	}
	/*
	---- detector de en que vista se esta renderizando entre premium y gratis ----
	*/
	const Selector = ({ item }) => {
		if (premium) {
			return (
				<View>
					<Text style={styles.titlePremium}>{item.nombre}</Text>
					<Text style={styles.desPremium}>{item.des}</Text>
				</View>
			)
		} else {
			return (
				<View>
					<Text style={styles.titleGratis}>{item.nombre}</Text>
					<Text style={styles.desGratis}>{item.des}</Text>
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

//estilos de la lista
const styles = StyleSheet.create({
	container: {
		marginTop: '10px',
		flex: 1,
		justifyContent: 'center',
	},
	card: {
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
	titleGratis: {
		marginTop: '5px',
		marginLeft: '200px',
		fontWeight: 'bold',
		fontSize: '20px',
	},
	desGratis: {
		marginTop: '10px',
		marginLeft: '150px',
	},
	titlePremium: {
		marginTop: '5px',
		marginLeft: '180px',
		fontWeight: 'bold',
		fontSize: '20px',
	},
	desPremium: {
		marginTop: '10px',
		marginLeft: '130px',
	},
	img: {
		position: 'absolute',
		width: '125px',
		height: '95%',
		marginLeft: '5px',
		marginTop: '1%',
		borderRadius: '15px',
	},
})

export default ListaInfo
