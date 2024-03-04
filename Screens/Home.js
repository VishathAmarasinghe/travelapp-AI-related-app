import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View className="flex w-full bg-white flex-col justify-around place-items-center ">
        <View className="w-full mt-20 border-2 border-red-200 flex flex-col justify-center items-center">
      <Image
        source={require('../assets/logo.png')}
        // className="w-screen"
        style={{
            width:"68%",
            height:"51%"
        }}
      />
      </View>
      <TouchableOpacity title="Start" className="w-[90%] m-3 bg-[#276b1c] flex flex-col justify-center items-center p-3 rounded-xl" onPress={() => navigation.navigate("Destination")} >
        <Text className="text-xl text-white font-semibold">
            Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
