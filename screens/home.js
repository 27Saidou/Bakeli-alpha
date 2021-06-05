import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Alpha diallo', rating: 5, body: 'developpeur mobile', key: '1' },
        { title: 'Nafiou diallo', rating: 8, body: 'developpeur IOS', key: '2' },
        { title: 'Saidou diallo', rating: 10, body: 'developpeur Web', key: '3' }
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
