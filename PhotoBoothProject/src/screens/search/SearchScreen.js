import React, {useEffect, useState} from 'react'
import {View, FlatList, Platform} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import useFetch from "../../useFetch";
import TextInput from "./components/textInput/TextInput";
import Item from "./components/item/Item";
import DetailsScreen from "../details/DetailsScreen";
import styles from "./styles";
import {BarIndicator} from "react-native-indicators";

const SearchScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [search, setSearch] = useState(null)

    const {
        data,
        autoCompleteSearch,
        searchData,
        getByName,
        result,
        error,
        loading
    } = useFetch("https://api.openbrewerydb.org/breweries?per_page=1000")

    if (error) {
        console.log(error)
    }

    const arr = []
    if (data) {
        const filter = data.filter(e => e.longitude !== null)
        filter.map(x => arr.push({
            "longitude": x.longitude,
            "latitude": x.latitude,
            "name": x.name,
            "type": x.brewery_type
        }))
    }

    useEffect(() => {
        autoCompleteSearch(search)
    }, [search])

    const seeResult = async (name: string) => {
        await getByName(name)
        setModalVisible(true)
    }

    return (
        <>
            <View>
                {Platform.OS === 'ios' ?
                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            region={{
                                latitude: 40.389717,
                                longitude: -120.6112948,
                                latitudeDelta: 15,
                                longitudeDelta: 15,
                            }}
                        >
                            {arr.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        title={marker.name}
                                        description={marker.type}
                                        coordinate={{
                                            latitude: parseFloat(marker.latitude),
                                            longitude: parseFloat(marker.longitude)
                                        }}/>
                                )
                            )}
                        </MapView>
                    </View>
                    : null}
                <View>
                    <TextInput textInputProps={{onChangeText: (e) => setSearch(e)}} label={'Search field'}/>
                </View>

                <View style={{height: Platform.OS === "ios" ? 380 : null}}>
                    {loading ? <BarIndicator size={32} color={'#9775f7'}/> : <FlatList
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        keyExtractor={item => item.id}
                        data={searchData}
                        renderItem={({item, index}) => (
                            <Item
                                onPress={() => seeResult(item.name).catch(e => console.log(e))}
                                name={item.name}
                                id={index}/>
                        )}/>}

                </View>
            </View>
            <DetailsScreen
                data={{
                    name: result?.name,
                    street: result?.street,
                    city: result?.city,
                    website: result?.website,
                    longitude: result?.longitude,
                    latitude: result?.latitude
                }}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}/>
        </>
    )
}

export default SearchScreen
