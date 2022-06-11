import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import { NavigationMenu } from '../../components/NavigationMenu';
import { getBookingByReference } from '../../dataService/getData';


export const HomeScreen = ({ navigation }) => {
  
  let initialState = '';
  
  const [bookingReference, setBookingReference] = useState(initialState);
  const [bookingData, setBookingData] = useState([]);
  

  useEffect(() => {
    bookingData.length !== 0 && navigation.navigate('CheckIn', { reference: bookingData });
  },[bookingData])


  const fetchData = async () => {
    const result = await getBookingByReference(bookingReference);
    if(result.result !== null) {
      const {check_in, check_out, guest, price} = result.result;
      const infoBooking = {
        guest,
        'check In': (new Date(check_in)).toLocaleDateString(),
        'check Out': (new Date(check_out)).toLocaleDateString(),
        'total Price': price
      }
      setBookingData([infoBooking]);
    } 
    if(result.result === null) {
      Alert.alert(
        "Query Eror",
        "Reference doesn't exist",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }

  return (
    <>
      <NavigationMenu navigation={navigation}/>
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder= "AAA0000"
          onChangeText={newReference => setBookingReference(newReference)}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={ () =>
              fetchData()  
            }
        >
            <Text style={styles.txtButton}>CHECK IN</Text>
        </TouchableOpacity>
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