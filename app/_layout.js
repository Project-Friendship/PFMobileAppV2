import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const Layout = () => {

	const [fontsLoaded] = useFonts({
		VHeavy: require('../assets/fonts/Vision-Heavy.ttf'), // DMBold
		VRegular: require('../assets/fonts/Vision-Regular.ttf'), // DMMedium
		VLight: require('../assets/fonts/Vision-Light.ttf'), // DMRegular
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) await SplashScreen.hideAsync();
	}, [fontsLoaded])

	if (!fontsLoaded) return null;
	return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;