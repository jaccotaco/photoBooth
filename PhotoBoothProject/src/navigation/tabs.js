import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SearchScreen from "../screens/search/SearchScreen";
import style from "./styles"
import {Text, View, Image, TouchableOpacity} from "react-native";
import image from "../assets/image/image";
import styles from "./styles";

const Tab = createBottomTabNavigator()

const CustomTab = ({children, onPress}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <View style={styles.innerContainer}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {...style.tabContainer}
            }}
        >
            <Tab.Screen name={'Home'} component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={image.home}
                            resizeMode={'contain'}
                            style={{
                                ...styles.image,
                                tintColor: focused ? '#9775f7' : 'white'
                            }}
                        />
                        <Text style={{color: focused ? '#9775f7' : 'white'}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={image.search}
                               resizeMode={'contain'}
                               style={styles.searchButton}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTab {...props}/>
                    )
                }}
            />
            <Tab.Screen name={'Profile'} component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={image.smile}
                            resizeMode={'contain'}
                            style={{
                                ...styles.image,
                                tintColor: focused ? '#9775f7' : 'white'
                            }}
                        />
                        <Text style={{color: focused ? '#9775f7' : 'white'}}>Profile</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs
