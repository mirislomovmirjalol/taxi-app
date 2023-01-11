import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, FlatList, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "./Map";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import NavigateCard from "./NavigateCard";

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
    return (
        <>
            <SafeAreaView style={tw`h-full bg-white flex-grow`}>

                <View
                    style={tw`h-1/2 border-t border-gray-200`}>
                    <Map/>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate(NavigateCard)}
                    style={tw`absolute top-14 left-5 rounded-full`}
                >
                    <Icon
                        style={tw`p-2 bg-gray-800 rounded-full w-10 mt-4`}
                        name="arrowleft"
                        color="white"
                        type="antdesign"
                    />
                </TouchableOpacity>

                <Text
                    style={tw`text-center py-5 text-xl border-t border-gray-200`}
                >
                    Pick a ride
                </Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item: {id, title, multiplier, image}}) => (
                        <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain"
                                }}
                                source={{uri: image}}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                <Text>Travel time...</Text>
                            </View>
                            <Text style={tw`text-xl`}>$99</Text>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </>
    );
}

export default RideOptionsCard