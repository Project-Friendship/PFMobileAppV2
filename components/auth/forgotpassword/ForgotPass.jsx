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
import InputBox from '../../form/InputBox'
import styles from './forgotPass.style'
import { Link } from 'expo-router';
import axios from 'axios';
import { API_BASE } from '@env';


const ForgotScreen = ({i18n}) => {
    const [email, onEmailChange] = useState('');
    const [sentMessage, setSentMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const onSubmitHandler = async (event) => {
		if (false) {//invalid data die

		}
		setIsLoading(true);
		setIsError(false);
		try {
//			const response = await axios.post(`${API_BASE}/authorize/reset`, {email})
		} catch (error) {
			setErrorMessage(i18n.t(error.response.data.messageCode.toString()));
			setIsLoading(false);
			setIsError(true);
		} finally {
			setIsLoading(false);
            setSentMessage(true);
		}
	}



	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={IMAGES.logoWithName} />
			</View>

			{!sentMessage && <View style={styles.formContainer} class="formContainer">
				<View>
				    <InputBox
				    	labelText={i18n.t('sendEmailPrompt')}
					    isPassword={false}
    					onChangeText={(event)=>{
	    					onEmailChange(event)
		    				setIsError(false)
			    		}}
    				/>
				</View>
				<View>
					<Pressable
						title={i18n.t('forgotPasswordActionPrompt')}
						onPress={onSubmitHandler}
						disabled={isLoading}
						style={styles.button}
						required={true}
					>
						<Text style={styles.buttonLabel}>
							{i18n.t('forgotPasswordActionPrompt')} {(isLoading) && <ActivityIndicator 
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
			</View>}
			{sentMessage && <View>
				<Text>
					<p style={{textAlign: 'center', maxWidth: '400px'}}>
						{i18n.t('sentEmailPrompt', {email})}
						<span className='link-like' style={{color:'blue'}} onClick={()=> {onEmailChange('');setSentMessage(false)}}>
							{i18n.t('tryAgainButtonPrompt')}
						</span>
					</p>
				</Text>
			</View>}
			<StatusBar style="auto" />
		</View>
	);
}
module.exports = ForgotScreen;
