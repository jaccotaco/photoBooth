import React from 'react'
import {Text, View} from "react-native";
import styles from "./styles";
import FastImage from 'react-native-fast-image'
import image from "../../../../assets/image/image";

const Toolbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Happy Summer!
                </Text>
            </View>
            <View style={styles.image}>
                <FastImage
                    resizeMode={FastImage.resizeMode.contain}
                    source={image.beer}
                    style={styles.flower}
                />
            </View>
        </View>
    )
}

export default Toolbar
