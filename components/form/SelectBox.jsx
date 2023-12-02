import React from 'react'

import { View, Text, Pressable, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';

import styles from './form.style'

const SelectBox = (props) => {
    
    const {
        labelText = '',
        onChangeSelection = '',
        inputValue = '',
        additionalContainerStyle = '',
        selectionValues = '',
    } = props;

    return (
        <View style={additionalContainerStyle ? [styles.inputElement, additionalContainerStyle]: styles.inputElement}>
            {labelText ? <Text style={styles.inputLabel}>{labelText}</Text> : null}
            <View style={styles.select}>
            <Picker
                selectedValue={inputValue}
                style={styles.picker}
                onValueChange={onChangeSelection}
            >
            {selectionValues.map(function (arrValue, arrIndex, array) {
                    return <Picker.Item key={arrIndex} label={arrValue} value={arrValue} />
                })
            }
            </Picker>
            </View>
        </View>
    )
}

export default SelectBox