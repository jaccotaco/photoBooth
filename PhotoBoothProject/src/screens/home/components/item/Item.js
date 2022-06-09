import React from 'react'
import {Text, View} from "react-native";
import styles from "./styles";

interface Props {
    name: string,
    brewery: string,
    state: string,
    city: string
}

const Item = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.text}>{props.brewery}</Text>
            <Text style={styles.text}>{props.state}, {props.city}</Text>
            <View style={styles.divider}/>
        </View>
    )
}

export default Item
