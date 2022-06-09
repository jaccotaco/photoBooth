import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import image from "../../../../assets/image/image";

interface Props {
    title: string,
    onPress: () => void
}

const Card = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.imageContainer}>
                <Image resizeMode={'contain'}
                       style={styles.size}
                       source={image.press}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Card
