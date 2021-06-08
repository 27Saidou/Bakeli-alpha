import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
import {globalStyles} from '../styles/global';
import{Formik} from 'formik';

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
        <Formik initialValues={{title:'',body:'',rating:''}}
        onSubmit={(values,actions)=>{
            actions.resetForm();
            addReview(values);
        }}
        >
        {(props)=>(
            <View>
                <TextInput style={globalStyles.input} placeholder='Review title' 
                onChangeText={props.handleChange('title')}
                values={props.values.title}
                />
                <TextInput multiline 
                style={globalStyles.input} placeholder='Review body' 
                onChangeText={props.handleChange('body')}
                values={props.values.body}
                />
                <TextInput style={globalStyles.input} placeholder='Review rating(1-5)' 
                onChangeText={props.handleChange('rating')}
                values={props.values.rating}
                keyboardType='numeric'
                />
                <Button title="submit" color='maroon' onPress={props.handleSubmit}/>
            </View>
        )}

        </Formik>
        </View>
    )
}