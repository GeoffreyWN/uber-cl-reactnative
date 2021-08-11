import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements'


const data = [
    {
        id: '123',
        icon: "home",
        location: "Home",
        destination: "Nakuru, Kenya"
    },
    {
        id: '456',
        icon: "briefcase",
        location: "Work",
        destination: "Naivasha, Kenya"
    }
]

const NavFavourites = () => {

    return (
        <FlatList data={data} keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({ item: { location, icon, destination } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`} >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`} >{location}</Text>
                        <Text style={tw`text-gray-500`} >{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})