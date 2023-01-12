import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, FlatList, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "./Map";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../slices/navSlice";

const data = [
    {
        id: "0",
        title: "Eco",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "1",
        title: "Standard",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "2",
        title: "Comfort",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    }
]
const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    return (
        <>
            <SafeAreaView style={tw`h-full bg-white flex-grow`}>

                <View
                    style={tw`h-1/2 border-t border-gray-200`}>
                    <Map/>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-16 left-8 z-50 rounded-full shadow-lg`}
                >
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowleft"
                        color="white"
                        type="antdesign"
                    />
                </TouchableOpacity>

                <Text
                    style={tw`text-center py-5 text-xl border-t border-gray-200`}
                >
                    Pick a ride - {travelTimeInformation?.distance?.text}
                </Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item: {id, title, multiplier, image}, item}) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            style={tw`flex-row justify-between h-20 items-center px-5 mx-5 rounded-xl border-2 border-white ${
                                id === selected?.id && "border-black bg-gray-100"
                            }`}
                        >
                            {/*
                                <Image
                                style={{
                                      width: 100,
                                      height: 100,
                                      resizeMode: "contain"
                                    }}
                                    source={{uri: image}}
                                />
                            */}

                            <Icon
                                name={"car"}
                                type="ionicon"
                                color="black"
                                size={34}
                            />
                            <View style={tw`-ml-6 text-left`}>
                                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                                <Text style={tw`text-xs font-light text-gray-600`}>{travelTimeInformation?.duration?.text + " " + 'travel time'}</Text>
                            </View>
                            <Text>
                                {new Intl.NumberFormat('en-gb', {
                                    style: 'currency',
                                    currency: 'GBP'
                                }).format(
                                    (travelTimeInformation?.duration.value * 1.8) * multiplier / 100 + (multiplier * 2)
                                )}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <View>
                    <TouchableOpacity
                        style={tw`bg-black py-3 m-3 rounded-lg`}
                        onPress={() => navigation.navigate("SearchingCarScreen")}
                    >
                        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default RideOptionsCard