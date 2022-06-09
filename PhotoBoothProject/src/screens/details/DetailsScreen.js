import React from 'react'
import {Text, View, Linking, Platform} from "react-native";
import Modal from 'react-native-modal'
import Toolbar from "./components/toolbar/Toolbar";
import Card from "./components/card/Card";
import MapView, {Marker} from "react-native-maps";
import styles from "./styles";

export interface Data {
    name: string,
    street: string,
    city: string,
    website: string,
    longitude: string,
    latitude: string
}

interface Props {
    visible: boolean,
    onClose: () => void,
    data: Data,
}

const DetailsScreen = (props: Props) => {

    const openWebsite = () => {
        props.data.website ? Linking.openURL(props.data.website) : alert('Website is missing')
    }

    return (
        <Modal
            visible={props.visible}
            onBackdropPress={props.onClose}
            style={styles.modal}
            hasBackdrop={true}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            animationInTiming={500}
            animationOutTiming={500}
        >
            <View style={styles.outerContainer}>
                <Toolbar onPress={props.onClose} name={props.data.name}/>
                <View style={styles.margin}>
                    {Platform.OS === "ios" ?
                        <View style={styles.container}>
                            {props.data.longitude ?
                                <MapView
                                    style={styles.map}
                                    region={{
                                        latitude: parseFloat(props.data.latitude),
                                        longitude: parseFloat(props.data.longitude),
                                        latitudeDelta: 10,
                                        longitudeDelta: 10,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: parseFloat(props.data.latitude),
                                            longitude: parseFloat(props.data.longitude)
                                        }}/>

                                </MapView> :
                                <View>
                                    <Text style={styles.noMap}>Im so sorry, map
                                        is missing for this brewey but you can find it
                                        on {props.data.street}, {props.data.city}.</Text>
                                </View>
                            }
                        </View> : <View>
                            <Text style={styles.noMap}>Im so sorry, map
                                is missing on Android, switch to ios to experience the coolest map ever.. But check out
                                the address {props.data.street}, {props.data.city}.</Text>
                        </View>
                    }
                </View>
                <View style={styles.websiteButton}>
                    <Card title={'Visit website'} onPress={openWebsite}/>
                </View>
            </View>

        </Modal>
    )
}

export default DetailsScreen
