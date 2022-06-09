import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5
    },
    container: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#9775f7'
    },
    tabContainer: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#383838',
        borderRadius: 15,
        height: 90,
    },
    itemContainer: {alignItems: 'center', justifyContent: 'center', top: 10},
    image: {
        width: 25,
        height: 25,
    },
    searchButton: {
        width: 30,
        height: 30,
        tintColor: 'white'
    }
})

export default style
