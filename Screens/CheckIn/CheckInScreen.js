import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationMenu } from '../../components/NavigationMenu';

export const CheckInScreen = ({ navigation, route }) => {
    let bookingData = route.params.reference === 'empty' ? false : Object.values(route.params.reference[0]);

    useEffect(() => {
        route.params.reference === 'empty' && navigation.navigate('Home');
    }, [])

    return (
        <>
            <NavigationMenu navigation={navigation}/>
            { bookingData ?
                bookingData.map ( item => {
                    return <Text> {item}</Text>
                })
                :
                null
            }
            <Text>This is CheckIn Screen and this is the reference:  </Text>
        </>
    ) 
};
