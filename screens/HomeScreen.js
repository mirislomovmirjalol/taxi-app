import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch, useSelector} from "react-redux";
import {selectDestination, selectOrigin, setDestination, setOrigin} from "../slices/navSlice";
import FavouritePlaces from "../components/FavouritePlaces";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Text style={tw`text-2xl font-bold`}>
                    Jalol's Taxi app
                </Text>

                {/*
                build a search bar with auto complete. We will use GooglePlacesAutocomplete from react-native-google-places-autocomplete
                */}
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                        // this auto complete search places only inside uk
                        components: 'country:uk',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={3}
                    debounce={400}
                    onPress={
                        (data, details = null) => {
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                        }
                    }
                    textInputProps={{
                        value: origin?.description,
                        onChangeText: (text) => {
                            dispatch(setOrigin(null));
                        }
                    }}

                    // defaultValue={origin.description}
                />

                <NavOptions/>
                <FavouritePlaces dispatchFor={"origin"}/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({});