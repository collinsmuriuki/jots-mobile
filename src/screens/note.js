import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client'

import NoteView from '../components/Note'
import Loader from '../components/Loader'
import { GET_NOTE } from '../gql/query'

const NoteScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } })

    if (loading) return <Loader />

    if (error) return <Text>Error: {error.message}</Text>

    return (
        <View style={{ padding: 10 }}>
            <NoteView note={data.note} />
        </View>
    )
}

export default NoteScreen
