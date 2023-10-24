import { useState } from 'react'
import {
	View,
	Text,
	Pressable,
	Image,
	StatusBar,
	TextInput,
	ActivityIndicator,
} from 'react-native'

import { COLORS, IMAGES } from '../../../enum'
import lang from '../../../enum/lang/en'
import styles from './forgotPass.style'
import { Link } from 'expo-router';
import axios from 'axios';
import { API_BASE } from '@env';


const LoginScreen = ({i18n}) => {
	const [username, onUsernameChange] = useState('');
	const [password, onPasswordChange] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const holder = {
		secondTextInput: {
			focus: () => { }
		}
	}
	const onSubmitHandler = async (event) => {
		if (false) {//invalid data die

		}
		setIsLoading(true);
		setIsError(false);
		try {
			const response = await axios.post(`${API_BASE}/authenticate/login`, { userName: username, password })
		} catch (error) {

			setErrorMessage(i18n.t(error.response.data.messageCode.toString()));
			setIsLoading(false);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}



	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={IMAGES.logoWithName} />
			</View>
			<Text></Text>
			<View style={styles.formContainer} class="formContainer">
				<View>
					<Text style={styles.intputLabel}>{i18n.t('usernameLabel')}</Text>
					<TextInput
						style={styles.input}
						onChangeText={(event)=>{
							onUsernameChange(event)
							setIsError(false)
						}}
						onSubmitEditing={() => { holder.secondTextInput.focus(); }}
						value={username}
					>
					</TextInput>
				</View>
				<View>
					<Text style={styles.intputLabel}>{i18n.t('passwordLabel')}</Text>
					<TextInput
						ref={(input) => { holder.secondTextInput = input; }}
						secureTextEntry={true}
						style={styles.input}
						onChangeText={(event)=>{
							onPasswordChange(event)
							setIsError(false)
						}}
						onSubmitEditing={onSubmitHandler}
						value={password}
					></TextInput>
					<Pressable
						title="Login"
						onPress={onSubmitHandler}
						disabled={isLoading}
						style={styles.button}
						required={true}
					>
						<Text style={styles.buttonLabel}>
							{i18n.t('loginLabel')} {(isLoading) && <ActivityIndicator 
								style={{
									position: 'absolute',
									right: '-20px',

								}}
								visible={isLoading} 
								size="small" 
								color={COLORS.gray} 
							/>}

						</Text>
					</Pressable>
				</View>
				<View stlye={styles.actionLinks}>
					<Text style={styles.errorMessage}>
						{isError ? errorMessage : " "}
					</Text>

					<Text style={{
						display: "flex",
						flexDirection: 'column',
						alignContent: 'center'
					}}>
						<Text><Link href="/register">{i18n.t('signUpPrompt')}</Link></Text>
						<Link href="/forgot">{i18n.t('forgotPasswordPrompt')}</Link>
					</Text>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
module.exports = ForgotPass;
