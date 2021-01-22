import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Tab = ({ tab, icon, onPress, color }) => {
	return (
		<TouchableOpacity style={style.container} onPress={onPress}>
			<AntDesign name={icon} size={18} style={{ color }} />
			<Text style={{ color }}>{tab.name}</Text>
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
})

export default Tab
