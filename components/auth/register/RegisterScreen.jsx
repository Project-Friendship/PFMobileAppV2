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

import { checkEmailValidity } from '../../../hook/validation/checkEmail';
import { checkPasswordValidity } from '../../../hook/validation/checkPassword';

// this is coming directly from react
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, IMAGES } from '../../../enum'
import inputBoxStyles from '../../form/form.style';
import InputBox from '../../form/InputBox';
import styles from './registerScreen.style'
import axios from 'axios';
import { API_BASE } from '@env';
import SelectBox from '../../form/SelectBox';
import CheckBox from '../../form/CheckBox';


const RegisterScreen = ({i18n}) => {
    const [firstName, onFirstNameChange] = useState('');
    const [lastName, onLastNameChange] = useState('');
    const [preferredName, onPreferredNameChange] = useState('');

	const [checkedPronouns, setCheckedPronouns] = useState([]);
	const [otherPronoun, onOtherPronounChange] = useState('');

	const [role, onRoleChange] = useState('');
    const [email, onEmailChange] = useState('');
    
	const [password, onPasswordChange] = useState('');
	const [confirmPassword, onConfirmPasswordChange] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const holder = {
		secondTextInput: {
			focus: () => { }
		}
	}
	var pronouns = [];

	var requiredFields = 
		[{"fieldName": "firstName", "fieldValue":  firstName}, 
		{"fieldName": "lastName", "fieldValue":  lastName}, 
		{"fieldName": "preferredName", "fieldValue":  preferredName}, 
		{"fieldName": "pronouns", "fieldValue":  ''}, 
		{"fieldName": "role", "fieldValue":  role},
		{"fieldName": "email", "fieldValue":  email}, 
		{"fieldName": "password", "fieldValue":  password}, 
		{"fieldName": "confirmPassword", "fieldValue":  confirmPassword}];

	var pronounsList = 
		["He/Him", 
		"She/Her", 
		"They/Them",
		"Ze/Zir",
		"No Pronouns"];

	var rolesList =
		["",
		"Mentor",
		"Mentee",
		"Parent/Guardian",
		"Administrator"];

	const onSubmitHandler = async (event) => {
		setIsLoading(true);
        setIsError(false);

		pronouns = getPronouns();

		if (checkInputValidity()) {
			try {
				const response = await axios.post(`${API_BASE}/register/`, { 
					
					firstName: firstName,
					lastName: lastName,
					preferredName: preferredName,
					pronouns: pronouns,
					email: email,
					role: role,
					password: password
				})
			} catch (error) {
				setErrorMessage(i18n.t('registerFailed'));
				setIsLoading(false);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}
	};

	function getPronouns(){
		pronouns = [];
		for (let i = 0; i < checkedPronouns.length; i++){
			checked = checkedPronouns[i];
			if (checked){
				if (i == pronounsList.length){
					// other pronouns selected
					pronouns.push(otherPronoun);
				}
				else {
					pronouns.push(pronounsList[i]);
				}
			}
		}
		return pronouns;
	}

	function checkInputValidity(){
		for (let i = 0; i<requiredFields.length; i++){
			let field = requiredFields[i]["fieldName"];
			let fieldValue;
			if (field == "pronouns"){
				fieldValue = pronouns;
			}
			else{
				fieldValue = requiredFields[i]["fieldValue"];
			}
			if (!fieldValue){
				let errorId = "no" + field.charAt(0).toUpperCase() + field.slice(1)
				setErrorMessage(i18n.t(errorId));
				setIsLoading(false);
				setIsError(true);
				return false;
			}
			if (field == 'pronouns'){
				if (fieldValue.length == 0 || fieldValue[0] == ''){
					let errorId = "noPronouns";
					setErrorMessage(i18n.t(errorId));
					setIsLoading(false);
					setIsError(true);
					return false;
				}
			}
			if (field == 'password'){
				if (!checkPasswordValidity(password)){
					let errorId = "noPassword";
					setErrorMessage(i18n.t(errorId));
					setIsLoading(false);
					setIsError(true);
					console.log("password: " + password);
					return false;
					
				}
			}
			if (field == 'confirmPassword'){
				if (password != confirmPassword){
					let errorId = "noConfirmPassword";
					setErrorMessage(i18n.t(errorId));
					setIsLoading(false);
					setIsError(true);
					console.log("confirm password: " + password);
					return false;
				}
			}
			if (field == 'email'){
				if(!checkEmailValidity(email)){ 
					let errorId = "noEmail";
					setErrorMessage(i18n.t(errorId));
					setIsLoading(false);
					setIsError(true);
					return false;
				}
			}
		}
		return true;
		
	}

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image source={IMAGES.logoWithName} />
			</View>
			<Text></Text>
			<View style={inputBoxStyles.formContainer} class="formContainer">
                <Text style={inputBoxStyles.formHeader}>{i18n.t('registerLabel')}</Text>
                <View style={styles.inputBoxLine}>
                    <InputBox
                        labelText={i18n.t('firstNameLabel')}
                        onChangeText={(event)=>{
							onFirstNameChange(event)
                            setIsError(false)
                        }}
                        inputValue={firstName}
						additionalContainerStyle={{width: '45%'}}
                    />
                    <InputBox
                        labelText={i18n.t('lastNameLabel')}
                        onChangeText={(event)=>{
							onLastNameChange(event)
                            setIsError(false)
                        }}
                        inputValue={lastName}
						additionalContainerStyle={{width: '45%'}}
                    />
                </View>
                <InputBox
					labelText={i18n.t('preferredNameLabel')}
					onChangeText={(event)=>{
						onPreferredNameChange(event)
						setIsError(false)
					}}
					inputValue={preferredName}
					additionalContainerStyle={{width: '45%'}}
				/>
				<CheckBox
					labelText={i18n.t('pronounsLabel')}
					selectionValues={pronounsList}
					checkedBoxes={checkedPronouns}
					setCheckedBoxes={setCheckedPronouns}
					hasOtherOption={true}
					otherValue={otherPronoun}
					onOtherChange={onOtherPronounChange}
				/>
                <SelectBox
					labelText={i18n.t('roleLabel')}
					onChangeSelection={(event)=>{
						onRoleChange(event)
						setIsError(false)
					}}
					inputValue={role}
					selectionValues={rolesList}
					additionalContainerStyle={{width: '45%'}}
				/>
				<InputBox
					labelText={i18n.t('emailLabel')}
					onChangeText={(event)=>{
						onEmailChange(event)
						setIsError(false)
					}}
					inputValue={email}
				/>
                <InputBox
					labelText={i18n.t('passwordLabel')}
					isPassword={true}
					onChangeText={(event)=>{
						onPasswordChange(event)
						setIsError(false)
					}}
					inputValue={password}
				/>
				<View style={styles.passwordInfoContainer}>
					<Text style={styles.passwordInfoHeader}>
						Password Requirements:
					</Text>
					<Text style={styles.passwordInfo}>
						• At least eight characters
					</Text>
					<Text style={styles.passwordInfo}>
						• At least one letter, number, and symbol
					</Text>
					<Text style={styles.passwordInfo}>
						• No accents or accented characters
					</Text>
					<Text style={styles.passwordInfo}>
						• No passwords that start or end with a blank space
					</Text>
				</View>
                <InputBox
					labelText={i18n.t('confirmNewPasswordLabel')}
                    isPassword={true}
					onChangeText={(event)=>{
						onConfirmPasswordChange(event)
						setIsError(false)
					}}
					inputValue={confirmPassword}
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
							{i18n.t('saveLabel')} 
							{(isLoading) ? 
							<ActivityIndicator 
								style={{
									position: 'absolute',
									right: '-20px',

								}}
								visible={isLoading} 
								size="small" 
								color={COLORS.gray} 
							/> : null}

						</Text>
					</Pressable>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
module.exports = RegisterScreen;