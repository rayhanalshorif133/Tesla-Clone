
import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

// create a component
const StyledButton = (props) => {



    const { type, content, onPress } = props;



    const backGroundColor = type === 'primary' ? '#171a20cc' : '#ffffff6a';
    const textColor = type === 'primary' ? '#ffffff' : '#171a20';



    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backGroundColor }]}
                onPress={() => onPress()}
            >
                <Text
                    style={[styles.text, { color: textColor }]}>
                    {content}
                </Text>
            </Pressable>
        </View >
    );
};



//make this component available to the app
export default StyledButton;
