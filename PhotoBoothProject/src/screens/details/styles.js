import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        height: 300, alignItems: 'center', justifyContent: 'center'
    }, map: {
        ...StyleSheet.absoluteFillObject,
    },
    modal: {
        margin: 0,
        padding: 0,
        marginTop: 100,
    },
    outerContainer: {
        width: '100%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#D9D5D1',
        height: '100%'
    }, margin: {
        marginHorizontal: 16,
        marginTop: 8
    },
    noMap: {fontSize: 25, fontWeight: '500', color: '#495358'},
    websiteButton: {justifyContent: 'center', paddingTop: 40}
})

export default style
