/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react'
import {StatusBar, useColorScheme} from 'react-native'

import AppStack from './routes/AppStack'
import SplashScreen from 'react-native-splash-screen'

import {Provider} from 'react-redux'
import {storeExample} from './reducers/storeExample'
import {LogBox} from 'react-native'

if (__DEV__) {
	void import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])

const App = () => {
	const isDarkMode = useColorScheme() === 'dark'

	useEffect(() => {
		SplashScreen.hide()
	}, [])

	return (
		<Provider store={storeExample}>
			<AppStack />
			<StatusBar
				backgroundColor={'#d6283a'}
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			/>
		</Provider>
	)
}

export default App
