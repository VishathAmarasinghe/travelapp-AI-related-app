import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Button, DatePickerAndroid, Text, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const StartingPoint = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const handleLocationSelect = (data) => {
    setLocation(data.description);
  };

  const router = useRoute();
  const selectedplaces = router.params.planningPlaces;
  const imageArray=router.params.imageArray;

  useEffect(()=>{
    console.log("dewly added data ",selectedplaces);
  },[])


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setStartDate("selected Date "+currentDate);
  };


  const showDatepicker = () => {
    setMode('date');
    setShow(true)
  };

  

  const proceedCreation = () => {
    navigation.navigate("planshower", { location: location, startDate: date,planData:selectedplaces,imageArray:imageArray });
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="font-bold text-lg mt-3">
            Select Your Desired Location
        </Text>
        <View className="h-32 z-40 relative ">

        
      <GooglePlacesAutocomplete
        placeholder='Search'
        // onPress={handlePlaceSelect} 
        onPress={(data)=>setSelectedLocation(data.description)}
        query={{
          key: 'AIzaSyBaDVwvh1ksOKMAb_s2QBEadlGsbc4A43k',
          language: 'en',
        }}
        // className="bg-gray-800 border-2 border-gray-300 rounded-md overflow-hidden"
        styles={{
            textInputContainer: {
              backgroundColor: '#D6D6D6',
            },
            textInput: {
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              backgroundColor:"#D6D6D6",
              
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
      />
      </View>
      <Text>{startDate}</Text>
      <Button title="Date" onPress={showDatepicker}/>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <TouchableOpacity  title="Next" onPress={proceedCreation} >
        <Text>
            Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartingPoint;
