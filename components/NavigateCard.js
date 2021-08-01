import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env' //configured in babel.config.js
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>

            <Text style={tw`text-center py-5 text-xl`} >Good Morning Wesh.Great!</Text>

            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={toInputBoxStyles}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate('RideOptionsCard')
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
                        placeholder="Where to?"
                        minLength={2}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#CCC",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})