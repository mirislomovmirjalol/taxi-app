import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames";
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from "react-redux";
import {selectOrigin} from "../slices/navSlice";

const MapScreen = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
            style={tw`h-1/2`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    )
}

export default MapScreen