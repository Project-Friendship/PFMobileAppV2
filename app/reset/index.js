import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../enum';
import ResetPasswordScreen from '../../components/auth/resetPassword/ResetPasswordScreen';
import  en  from '../../enum/lang/en'
import leet from '../../enum/lang/leet';
import * as Localization from 'expo-localization';
import {I18n} from 'i18n-js';


const ResetPassword = () => {
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
					<ResetPasswordScreen i18n={i18n}></ResetPasswordScreen>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ResetPassword;