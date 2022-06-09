import React from 'react'
import {Text, View} from "react-native";
import styles from "./styles";

interface Props {
    name: string,
    id: string,
    onPress: (name: string) => void
}

const Item = (props: Props) => {
    return (
        <View
            style={{
                ...styles.item,
                backgroundColor: props.id % 2 ? '#D9D5D1' : '#DBE8E8',
            }}
        >
            <Text onPress={() => props.onPress(props.name)}
                  style={styles.name}>{props.name}</Text>
        </View>
    )
}

export default Item
