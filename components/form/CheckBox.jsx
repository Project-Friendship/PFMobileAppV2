import React from 'react'

import { View, Text, Pressable, TextInput} from 'react-native'
import Checkbox from 'expo-checkbox'

import styles from './form.style'

const CheckBox = (props) => {
    
    const {
        labelText = '',
        selectionValues = '',
        additionalContainerStyle = '',
        checkedBoxes = '',
        setCheckedBoxes = '',
        hasOtherOption='',
        otherValue='',
        onOtherChange='',
    } = props;

    const otherIndex = selectionValues.length;

    return (
        <View style={additionalContainerStyle ? [styles.inputElement, additionalContainerStyle]: styles.inputElement}>
            {labelText ? <Text style={styles.checkboxLabel}>{labelText}</Text> : null}
            <View style={styles.checkboxes}>
            {selectionValues.map(function (arrValue, arrIndex, array) {
                    return <View key={arrIndex} style={styles.checkbox}>
                                <Checkbox 
                                    optionIndex={arrIndex} 
                                    value={checkedBoxes[arrIndex] || ''} 
                                    onValueChange={() => {
                                        const newCheckedBoxes = [...checkedBoxes];
                                        newCheckedBoxes[arrIndex] = !newCheckedBoxes[arrIndex];
                                        setCheckedBoxes(newCheckedBoxes);
                                    }}
                                />
                                <Text style={styles.checkboxText}>{arrValue}</Text>
                            </View>
                })
            }
            {hasOtherOption ? <View style={styles.checkbox}>
                <Checkbox 
                    optionIndex={otherIndex} 
                    value={checkedBoxes[otherIndex] || ''} 
                    onValueChange={() => {
                        const newCheckedBoxes = [...checkedBoxes];
                        newCheckedBoxes[otherIndex] = !newCheckedBoxes[otherIndex];
                        setCheckedBoxes(newCheckedBoxes);
                    }}
                />
                <TextInput 
                    style={styles.otherInputBox}
                    onChangeText={onOtherChange}
                    value={otherValue}
                />
            </View> : null}
            </View>
        </View>
    )
}

export default CheckBox