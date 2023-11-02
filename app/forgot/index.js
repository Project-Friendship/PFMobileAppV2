import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../enum';
import ForgotScreen from '../../components/auth/forgotpassword/ForgotPass1';
import useFetch from '../../hook/useFetch';
import  en  from '../../enum/lang/en'
import leet from '../../enum/lang/leet';
import * as Localization from 'expo-localization';
import {I18n} from 'i18n-js';

const Home = () => {
	const [locale, setLocale] = useState(Localization.locale);//'leet')//
	const i18n = new I18n({ 'en-US': en, 'leet': leet });
	i18n.locale = locale;
	i18n.enableFallback = true;

	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerTitle: ""
				}} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }} >
					<ForgotScreen i18n={i18n}></ForgotScreen>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Forgot;
