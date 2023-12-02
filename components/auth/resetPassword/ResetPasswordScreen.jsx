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

// this is coming directly from react
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, IMAGES } from '../../../enum'
import inputBoxStyles from '../../form/form.style';
import InputBox from '../../form/InputBox';
import styles from './resetPasswordScreen.style'
import axios from 'axios';
import { API_BASE } from '@env';


const ResetPasswordScreen = ({i18n}) => {
	const [newPassword, onNewPasswordChange] = useState('');
	const [confirmNewPassword, onConfirmNewPasswordChange] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const holder = {
		secondTextInput: {
			focus: () => { }
		}
	}
	const onSubmitHandler = async (event) => {
		setIsLoading(true);
        setIsError(false);
        if (newPassword != confirmNewPassword) {
            setErrorMessage(i18n.t('passwordsDontMatch'));
			setIsLoading(false);
			setIsError(true);
        }
        else {
            try {
                const response = await axios.post(`${API_BASE}/authenticate/reset`, { password: newPassword })
            } catch (error) {
				setErrorMessage(i18n.t('resetPasswordFailed'));
                setIsLoading(false);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
	};

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={IMAGES.logoWithName} />
			</View>
			<Text></Text>
			<View style={inputBoxStyles.formContainer} class="formContainer">
                <Text style={inputBoxStyles.formHeader}>{i18n.t('passwordResetLabel')}</Text>
				<InputBox
					labelText={i18n.t('newPasswordLabel')}
					isPassword={true}
					onChangeText={(event)=>{
						onNewPasswordChange(event)
						setIsError(false)
					}}
					onSubmitEditing={() => { holder.secondTextInput.focus(); }}
					inputValue={newPassword}
				/>
				<InputBox
					labelText={i18n.t('confirmNewPasswordLabel')}
					isPassword={true}
					onChangeText={(event)=>{
						onConfirmNewPasswordChange(event)
						setIsError(false)
					}}
					onSubmitEditing={onSubmitHandler}
					inputValue={confirmNewPassword}
				/>
				<View>
					<Text style={styles.errorMessage}>
						{isError ? errorMessage : " "}
					</Text>
				</View>
				<View>
					<Pressable
						title="Save"
						onPress={onSubmitHandler}
						disabled={isLoading}
						style={inputBoxStyles.button}
						required={true}
					>
						<Text style={inputBoxStyles.buttonLabel}>
							{i18n.t('saveLabel')} {(isLoading) && <ActivityIndicator 
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
			<StatusBar style="auto" />
		</View>
	);
}
module.exports = ResetPasswordScreen;