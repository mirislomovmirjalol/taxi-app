import React from "react";
import {StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import {Icon} from "@rneui/base";
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "0",
        icon: "home",
        location: "Home",
        destination: "114 Ditton Fields, Cambridge, UK",
    },
    {
        id: "1",
        icon: "briefcase",
        location: "Work",
        destination: "Anglia Ruskin University Cambridge Campus, East Road, Cambridge, UK",
    }
]

const FavouritePlaces = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
            )}
            renderItem={({item: {icon, location, destination}}) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View style={tw`text-center`}>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default FavouritePlaces

const styles = StyleSheet.create({});