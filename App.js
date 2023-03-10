import "react-native-gesture-handler";
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import HomeScreen from "./screens/HomeScreen";
import RideScreen from "./screens/RideScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import SearchingCarScreen from "./screens/SearchingCarScreen";

export default function App() {
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{flex: 1}}
                        keyboardVerticalOffset={Platform.OS === "ios" ? -74 : 0}
                    >
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="RideScreen"
                                component={RideScreen}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="SearchingCarScreen"
                                component={SearchingCarScreen}
                                options={{
                                    headerShown: false,
                                }}
                            />
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
