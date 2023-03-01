import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {



    return (
        <View style={styles.container}>

            <FlatList
                data={cars}
                renderItem={({ item }) =>
                    <CarItem car={item} />
                    /* name={item.name}
                      tagLine={item.tagLine}
                      tagLineCTA={item.tagLineCTA}
                     image={item.image} }*/

                }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}


            />

        </View>
    );
};

export default CarsList;
