import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationMenu } from '../../components/NavigationMenu';

export const CheckInScreen = ({ navigation, route }) => {
    let bookingDataKeys = Object.keys(route.params.reference[0]);
    let bookingData = Object.values(route.params.reference[0]);

    return (
        <>
            <NavigationMenu navigation={navigation}/>
            <View style={styles.container}>
                <Text style={styles.textTitle}>BOOKING DETAIL</Text>
                { bookingData ?
                    bookingData.map ( (item, index) => {
                        return <Text style={styles.textInfo}> {`${bookingDataKeys[index]}: ${item}`}</Text>
                    })
                    :
                    null
                }
            </View>
        </>
    ) 
};

const styles= StyleSheet.create({
    container: {
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#333333',
        border:'1px solid grey'
    },
    textTitle: {
        fontSize: 20,
        color: '#333333',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        width: 500,
    },
    textInfo: {
        color: 'white',
        border: '2px solid white',
        width: 500,
        textAlign: 'center',
        padding: 20,
        textTransform: 'uppercase',
    }
})
