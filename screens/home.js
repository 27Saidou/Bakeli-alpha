import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';


export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Alpha diallo', rating: 5, body: 'developpeur mobile', key: '1' },
        { title: 'Nafiou diallo', rating: 4, body: 'developpeur IOS', key: '2' },
        { title: 'Saidou diallo', rating: 3, body: 'developpeur Web', key: '3' },
    ]);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
    }
    return (
        <View style={globalStyles.container}>
            <Modal>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <ReviewForm addReview={addReview} />
                </View>
            </TouchableWithoutFeedback>
            </Modal>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});
