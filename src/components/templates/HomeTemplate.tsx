import React from 'react'
import {View, Text, Button} from 'react-native'
// import './style.scss';

interface HomeProps {
	onPress: () => void
}

function HomeTemplate({onPress}: HomeProps): JSX.Element {
	return (
		<View>
			<Button title={'Reload'} onPress={onPress} />
			<Text>This is Home!</Text>
		</View>
	)
}

export default HomeTemplate
