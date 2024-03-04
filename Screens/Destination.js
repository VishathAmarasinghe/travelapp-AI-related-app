import React, { useState } from 'react';
import { View, Button,Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Destination = ({navigation}) => {
    const [location,setSelectedLocation]=useState(null);
  

  return (
    
    <View className="flex-1 bg-white p-4 ">
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
      <View className="w-full  border-2 border-red-200 flex flex-col justify-center items-center z-10">
      <Image
        source={require('../assets/Trip.gif')}
        className=""
        style={{
            // width:"80%",
            // height:"51%"
        }}
      />
      </View>
      <TouchableOpacity
        className="w-[90%] m-3 bg-[#276b1c] flex flex-col justify-center items-center p-3 rounded-xl"
        onPress={() =>navigation.navigate("reco",{location:location})}
      >
        <Text className="text-xl text-white font-semibold">
            Start
        </Text>
      </TouchableOpacity>
    </View>
   
  );
}

export default Destination;
