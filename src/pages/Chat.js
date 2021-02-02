import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Chat = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text>Chat</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF0D8',
		width: '100%',
		height: '100%',
	},
})

export default Chat
