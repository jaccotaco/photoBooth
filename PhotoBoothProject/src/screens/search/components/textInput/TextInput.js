import React, {useEffect, useRef} from 'react'
import {TextInput, TextInputProps} from 'react-native'
import styles from './styles'

interface Props {
    textInputProps?: TextInputProps,
    label: string,
}

const TextInputs = (props: Props) => {

    return (
        <TextInput
            style={styles.input}
            placeholderTextColor={"#8D929B"}
            placeholder={props.label}
            {...props.textInputProps}
            autoCorrect={true}
            underlineColorAndroid={'transparent'}
        />
    )
}

export default TextInputs
