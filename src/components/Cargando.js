import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Lottie from 'react-lottie'
import carga from '../animations/8370-loading.json'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

const opciones = {
	loop: true,
	autoPlay: true,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
	animationData: carga,
}

const Cargando = () => <Lottie options={opciones} width={width} height={height} />

const styles = StyleSheet.create({})
export default Cargando
