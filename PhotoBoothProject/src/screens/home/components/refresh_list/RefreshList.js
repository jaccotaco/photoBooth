import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import image from "../../../../assets/image/image";
import styles from "./styles";

interface Props {
    onPress: () => void
}

const RefreshList = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}>
                Shuffle your next brewery!
            </Text>
            <TouchableOpacity onPress={props.onPress}>
                <Image resizeMode={'contain'}
                       style={styles.image}
                       source={image.refresh}/>
            </TouchableOpacity>
        </View>
    )
}

export default RefreshList
