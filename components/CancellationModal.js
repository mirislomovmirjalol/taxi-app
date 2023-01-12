import tw from "tailwind-react-native-classnames";
import {Text, TouchableOpacity, View} from "react-native";
import {Icon, Overlay} from "@rneui/base";
import RideOptionsCard from "./RideOptionsCard";

const CancellationModal = ({visible, toggleOverlay, onConfirm}) => {
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={tw`bg-white rounded-xl`}
            backdropStyle={tw`bg-black bg-opacity-70`}
        >
            <View style={tw`flex flex-col items-center justify-center bg-white p-2`}>
                <View style={tw`pb-2 border-b border-gray-200`}>
                    <Text style={tw`font-semibold`}>Cancel confirmation</Text>
                </View>
                <View style={tw`p-2 my-5`}>
                    <Text style={tw`text-lg font-light`}>
                        Do you want to cancel the ride?
                    </Text>
                </View>
                <View style={tw`flex-row bg-white justify-evenly pt-2 border-t border-gray-100 mt-auto px-5`}>
                    <TouchableOpacity
                        style={tw`flex flex-row justify-evenly bg-black w-24 px-4 py-3 rounded-full`}
                        onPress={toggleOverlay}
                    >
                        <Icon
                            name="close"
                            type="font-awesome"
                            color="white"
                            size={16}/>
                        <Text
                            style={tw`text-white text-center`}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row justify-evenly bg-red-600 w-24 px-4 py-3 rounded-full ml-4`}
                    >
                        <Text
                            style={tw`text-white text-center`}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Overlay>
    );
}

export default CancellationModal;