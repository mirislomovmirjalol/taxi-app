import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import {LinearProgress} from 'react-native-elements';
import {Icon, Overlay} from "@rneui/base";
import CancellationModal from "../components/CancellationModal";


const SearchingCarScreen = () => {
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View
                style={tw`h-2/3 border-t border-gray-200`}>
                <Map/>
            </View>
            <View style={tw`border-t border-gray-200 p-5`}>
                <Text style={tw`text-center text-xl`}>
                    Looking for a driver
                </Text>
                <View style={tw`my-16`}>
                    <LinearProgress color="black"/>
                </View>
            </View>

            <View style={tw`flex-row bg-white justify-evenly py-2 border-t border-gray-100 mt-auto`}>
                <TouchableOpacity
                    onPress={toggleOverlay}
                    style={tw`flex flex-row justify-between bg-red-600 px-4 py-3 rounded-full`}
                >
                    <Icon
                        name="ban"
                        type="font-awesome"
                        color="white"
                        size={16}/>
                    <Text
                        style={tw`text-white text-center ml-2`}>Cancel Ride</Text>
                </TouchableOpacity>
            </View>

            <CancellationModal visible={visible} toggleOverlay={toggleOverlay}/>

        </SafeAreaView>
    );
}

export default SearchingCarScreen;