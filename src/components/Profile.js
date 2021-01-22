import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const Profile = () => {
	return (
		<View style={style.container}>
			<Text style={style.text} Profile></Text>
			<Button title='Move to another screen!' />
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default Profile
