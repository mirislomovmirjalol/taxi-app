import React from "react";
import {StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {Icon} from "@rneui/base";
import tw from "tailwind-react-native-classnames";
import {setOrigin, setDestination} from "../slices/navSlice";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import RideOptionsCard from "./RideOptionsCard";

const data = [
    {
        id: "0",
        icon: "home",
        title: "Home",
        location: {
            "lat": 52.2145403,
            "lng": 0.1602142,
        },
        destination: "114 Ditton Fields, Cambridge, UK",
    },
    {
        id: "1",
        icon: "briefcase",
        title: "Work",
        location: {
            "lat": 52.2033461,
            "lng": 0.1344563,
        },
        destination: "Anglia Ruskin University Cambridge Campus, East Road, Cambridge, UK",
    }
]

const FavouritePlaces = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
            )}
            renderItem={({item: {icon, title, destination, location}}) => (
                <TouchableOpacity
                    onPress={() => {
                        if (props.dispatchFor === "origin") {
                            dispatch(setOrigin({
                                location: location,
                                description: destination,
                            }));
                            navigation.navigate("RideScreen");
                        } else if(props.dispatchFor === "destination") {
                            dispatch(setDestination({
                                location: location,
                                description: destination,
                            }));
                            navigation.navigate(RideOptionsCard);
                        }
                    }}
                    style={tw`flex-row items-center py-4`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-500 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View style={tw`text-center`}>
                        <Text style={tw`font-semibold text-lg`}>{title}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default FavouritePlaces

const styles = StyleSheet.create({});