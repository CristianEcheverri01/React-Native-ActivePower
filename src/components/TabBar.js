import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Tab from './Tab'

const { width } = Dimensions.get('screen')

const TabBar = ({ state, navigation }) => {
	const [selected, setSelected] = useState('Gratis')
	const { routes } = state

	const renderColor = currentTab => {
		if (currentTab == selected) {
			return '#AB812C'
		} else {
			return '#171717'
		}
	}

	const handlePress = (activeTab, index) => {
		if (state.index !== index) {
			setSelected(activeTab)
			navigation.navigate(activeTab)
		}
	}

	return (
		<View style={style.wrapper}>
			<View style={style.container}>
				{routes.map((route, index) => (
					<Tab
						tab={route}
						icon={route.params.icon}
						onPress={() => handlePress(route.name, index)}
						color={renderColor(route.name)}
						key={route.key}
					/>
				))}
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		bottom: 20,
		width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#FABC3227',
		width: 350,
		borderRadius: 100,
		elevation: 2,
	},
})

export default TabBar
