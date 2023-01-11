import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames";
import {createStackNavigator} from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import HomeScreen from "./HomeScreen";
import RideOptionsCard from "../components/RideOptionsCard";
import {useSelector} from "react-redux";
import {selectDestination, selectOrigin} from "../slices/navSlice";
import FavouritePlaces from "../components/FavouritePlaces";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";

const RideScreen = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <View>
            <View style={tw`h-full`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default RideScreen