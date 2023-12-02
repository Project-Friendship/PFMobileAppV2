import React from 'react'

import { View, Text, Pressable, TextInput} from 'react-native'

import styles from './form.style'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from '../../hook/useTogglePasswordVisability';

const InputBox = (props) => {
    /*
    prop values:

    labelText
    passwordVisibility
    isPassword
    onChangeText
    onSubmitEditing
    inputValue
    */

    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility(props.isPassword);

    return (
        <View style={styles.inputElement}>
            <Text style={styles.inputLabel}>{props.labelText || "Input Label"}</Text>
            <View style={styles.input}>
                <TextInput
                    style={styles.inputBox}
                    secureTextEntry={passwordVisibility}
                    onChangeText={props.onChangeText}
                    onSubmitEditing={props.onSubmitEditing}
                    value={props.inputValue}
                >
                </TextInput>
                { props.isPassword ? 
                <Pressable style={styles.eyeButton} onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="grey" />
                </Pressable>
                : null }
            </View>
        </View>
    )
}

export default InputBox