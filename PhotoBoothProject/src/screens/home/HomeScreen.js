import React from 'react'
import {FlatList, View} from "react-native";
import useFetch from "../../useFetch";
import Toolbar from "./components/toolbar/Toolbar";
import Item from "./components/item/Item";
import RefreshList from "./components/refresh_list/RefreshList";
import styles from "./styles";
import {BarIndicator} from 'react-native-indicators'


const HomeScreen = () => {
    const {data, loading, refetch, error} = useFetch("https://api.openbrewerydb.org/breweries?per_page=3")

    if (error) {
        console.log(error)
    }

    const refresh = () => {
        refetch(Math.floor(Math.random() * 20))
    }

    return (
        <View style={styles.container}>
            <Toolbar/>
            <View style={styles.innerContainer}>
                <RefreshList onPress={refresh}/>
                {loading ? <BarIndicator size={32} color={'#9775f7'}/> : <FlatList
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({item}) => (
                        <Item
                            city={item.city}
                            state={item.state}
                            brewery={item.brewery_type}
                            name={item.name}/>
                    )}/>}

            </View>
        </View>
    )
}

export default HomeScreen
