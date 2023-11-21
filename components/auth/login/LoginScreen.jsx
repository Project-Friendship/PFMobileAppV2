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
import inputBoxStyles from '../../form/inputBoxes.style';
import InputBox from '../../form/InputBox';
import styles from './loginScreen.style'
import { Link } from 'expo-router';
import axios from 'axios';
import { API_BASE } from '@env';


const LoginScreen = ({i18n}) => {
	const [username, onUsernameChange] = useState('');
	const [password, onPasswordChange] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
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
			const response = await axios.post(`${API_BASE}/authenticate/login`, { userName: username, password: password })
		} catch (error) {
			setErrorMessage(i18n.t('loginFailed'));
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
			<View style={inputBoxStyles.formContainer} class="formContainer">
				
				<Text style={inputBoxStyles.formHeader}>{i18n.t('loginLabel')}</Text>
				<InputBox
					labelText={i18n.t('usernameLabel')}
					isPassword={false}
					onChangeText={(event)=>{
						onUsernameChange(event)
						setIsError(false)
					}}
					onSubmitEditing={() => { holder.secondTextInput.focus(); }}
					inputValue={username}
				/>
				<InputBox
					labelText={i18n.t('passwordLabel')}
					isPassword={true}
					onChangeText={(event)=>{
						onPasswordChange(event)
						setIsError(false)
					}}
					onSubmitEditing={onSubmitHandler}
					inputValue={password}
				/>
				<View>
					<Text style={styles.errorMessage}>
						{isError ? errorMessage : " "}
					</Text>
				</View>
				<View>
					<Pressable
						title="Login"
						onPress={onSubmitHandler}
						disabled={isLoading}
						style={inputBoxStyles.button}
						required={true}
					>
						<Text style={inputBoxStyles.buttonLabel}>
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
			</View>
			<View stlye={styles.actionLinksContainer}>
				<Text style={styles.actionLink}><Link href="/register">{i18n.t('signUpPrompt')}</Link></Text>
				<Text style={styles.actionLink}><Link href="/reset">{i18n.t('forgotPasswordPrompt')}</Link></Text>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
module.exports = LoginScreen;