import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationMenu } from '../../components/NavigationMenu';
import {useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export const InfoScreen = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({ Roboto_400Regular });

    if(!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
        <>
                <NavigationMenu navigation={navigation}/>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>HOTEL INFO</Text>
                    <Text style={styles.textInfo}>Reception Phone number: +34 910 555 555</Text>
                    <Text style={styles.textInfo}>ROOM Phone NUMBER: +34 910 555 556 #EXT (Room number)</Text>
                    <Text style={styles.textInfo}>24H HELPLINE: +34 912 555 555</Text>
                    <Text style={styles.textInfo}>Address: CALLE DE LA PRINCESA, 31. Madrid 28008</Text>
                    <Text style={styles.textInfo}>EMERGENCY NUMBER: 112</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
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
        fontFamily: 'Roboto_400regular',
        fontSize: 30,
        color: 'white',
        marginBottom: 20
    },
    textInfo: {
        fontFamily: 'Roboto_400regular',
        color: 'white',
        border: '2px solid white',
        width: 500,
        textAlign: 'center',
        padding: 20,
        textTransform: 'uppercase',
    }
});