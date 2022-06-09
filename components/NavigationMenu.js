import React from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity, Text} from 'react-native';



export const NavigationMenu = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Image 
                style={styles.menuImageLogo}
                source={require('../assets/H_logo.PNG')} 
            />
            <Image 
                source={require('../assets/hotel_miranda_text.png')} 
                style={{ width: 100 , height: 40 }}
            />
            {/* <Button  
                color='black'
                title="Check In"
                onPress={() =>
                    navigation.navigate('CheckIn', { reference: '000000' })
                }
            />
            <Button 
                color='black'
                title="Info"
                onPress={() =>
                    navigation.navigate('Info')
                }
            /> */}
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('CheckIn', { reference: 'empty' })
                }
            >
                <Text style={styles.txtButton}>Check-In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate('Info')
                }
            >
                <Text style={styles.txtButton}>Info</Text>
            </TouchableOpacity>
        </View>
    );


};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        width: '100%',
        backgroundColor: '#FFFFFF',
        border:'1px solid grey'
    },
    menuImageLogo: {
        boxShadow: '0px 0px 6px 1px',
        width: 40,
        height: 40,
        marginRight: 20
    }, 
    button: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: 'black',
        padding: 10,
        marginLeft: 30,
        borderRadius: 10
    },
    txtButton: {
        fontSize: 25
    }
});