import React from "react";
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {selectDestination, selectOrigin, setDestination, setOrigin} from "../slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import RideOptionsCard from "./RideOptionsCard";
import FavouritePlaces from "./FavouritePlaces";
import {Icon} from "@rneui/base";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`flex-row bg-white ml-6`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={tw`rounded-full shadow-lg`}
                >
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowleft"
                        color="white"
                        type="antdesign"
                    />
                </TouchableOpacity>
                <Text
                    style={tw`ml-4 py-5 text-xl`}
                >
                    Plan your ride
                </Text>
            </View>
            <View style={tw`border-t border-gray-200 flex-shrink h-full`}>
                <View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                        style={tw`bg-gray-200 mx-5 mt-4 p-2`}
                    >
                        <Text style={tw`text-lg`}>
                            {origin.description}
                        </Text>
                    </TouchableOpacity>
                    <GooglePlacesAutocomplete
                        autoFocus={true}
                        placeholder={'Where to?'}
                        nearbyPlacesAPI={'GooglePlacesSearch'}
                        styles={toInputBoxStyles}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                            // this auto complete search places only inside uk
                            components: 'country:uk',
                        }}
                        fetchDetails={true}
                        returnKeyType={'search'}
                        enablePoweredByContainer={false}
                        minLength={3}
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));

                            navigation.navigate(RideOptionsCard)
                        }}
                        textInputProps={{
                            value: destination?.description,
                            onChangeText: (text) => {
                                dispatch(setDestination(null));
                            }
                        }}
                    />
                </View>

                <View style={tw`p-5`}>
                    <FavouritePlaces dispatchFor="destination"/>
                </View>
                <View style={tw`flex-row bg-white justify-evenly py-2 border-t border-gray-100 mt-auto`}>
                    <TouchableOpacity
                        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full ${(!destination || !origin) && "opacity-20"}`}
                        onPress={() => navigation.navigate(RideOptionsCard)}
                        disabled={!origin || !destination}
                    >
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}/>
                        <Text
                            style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
                    >
                        <Icon
                            name={'fast-food-outline'}
                            type="ionicon"
                            color="black"
                            size={16}/>
                        <Text style={tw`text-center`}>Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})