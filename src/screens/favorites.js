import React from 'react'
import { View, Text } from 'react-native'

const Favorites = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>hello from favorites</Text>
        </View>
    )
}

Favorites.navigationOptions = {
    title: 'Favorites'
}

export default Favorites
