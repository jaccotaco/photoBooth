import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import image from "../../../../assets/image/image";

interface Props {
    name: string,
    onPress: () => void
}

const Toolbar = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image resizeMode={'contain'}
                           style={styles.size}
                           source={image.close}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Toolbar
