import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../slices/navSlice";

const HomeScreen = () => {
    const dispatch = useDispatch();
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
                />

                <NavOptions/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({});