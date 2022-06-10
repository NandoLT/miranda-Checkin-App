import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationMenu } from '../../components/NavigationMenu';
import { getBookingByReference } from '../../dataService/getData';


export const HomeScreen = ({ navigation }) => {
  
  const initialState = '';

  const [booking, setBooking] = useState(initialState);
  const [bookingData, setBookingData] = useState([]);


  useEffect(() => {
    console.log('BOOKING DATA', bookingData);
    bookingData.length !== 0 ? navigation.navigate('CheckIn', { reference: bookingData }) : null;
  },[bookingData])

  const fetchData = async () => {
    const result = await getBookingByReference(booking);
    result.result !== null ? setBookingData([result.result]) : null;
  }

  return (
    <>
      <NavigationMenu navigation={navigation}/>
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder="AAA0000"
          onChangeText={newReference => setBooking(newReference)}
        />
        <Button 
                color='#BEAD8E'
                title="Check In"
                onPress={() =>
                    fetchData() 
                }
        />
        {/* <TouchableOpacity
            style={styles.button}
            onPress={ fetchData }
        >
            <Text style={styles.txtButton}>CHECK IN</Text>
        </TouchableOpacity> */}
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  txtInput: {
    marginRight: 15,
    padding: 10,
    backgroundColor: '#333333',
    borderBottomWidth: 5,
    borderStyle: 'solid',
    borderColor: '#BEAD8E',
    height: 50,
    color: 'white',
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#BEAD8E',
    width: 250,
    height: 60,
    color: 'black',
    padding: 10,
    marginLeft: 30,
    borderRadius: 10
  },
  txtButton: {
    fontSize: 25,
    color: 'white'
  }
});