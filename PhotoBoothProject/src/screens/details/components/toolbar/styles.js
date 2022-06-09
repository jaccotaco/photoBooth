import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#EDF0F5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5
    },
    title: {fontSize: 19, fontWeight: '500'},
    innerContainer: {position: 'absolute', right: 8},
    size: {
        width: 25,
        height: 25,
    }
})

export default styles
