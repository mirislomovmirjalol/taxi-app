import React, {useEffect, useRef} from "react";
import MapView, {Marker} from "react-native-maps";
import {useSelector} from "react-redux";
import {selectDestination, selectOrigin} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY} from "@env";

const map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        });
    }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            style={{height: "100%", width: "100%"}}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="From"
                    description={origin.description}
                    identifier="origin"
                    pinColor={'#000'}
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="To"
                    description={destination.description}
                    identifier="destination"
                    pinColor={'#000'}
                />
            )}
        </MapView>
    );
}

export default map