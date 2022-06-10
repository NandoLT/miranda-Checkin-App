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
            <View style={styles.container}>
                { bookingData ?
                    bookingData.map ( item => {
                        return <Text style={styles.textInfo}> {item}</Text>
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
        fontSize: 30,
        color: 'white',
        marginBottom: 20
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
