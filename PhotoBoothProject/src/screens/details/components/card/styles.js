import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 8,
        height: 50,
        borderRadius: 4,
        marginHorizontal: 8,
        backgroundColor: '#FEDFCB',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5
    },
    title: {color: '#495358', fontWeight: '500', fontSize: 17},
    imageContainer: {position: 'absolute', right: 8},
    size: {
        width: 25,
        height: 25,
    }
})

export default styles
