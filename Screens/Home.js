import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View className="flex w-full h-full bg-white flex-col justify-around items-center ">
        <View className="w-full mt-20 mb-20  flex flex-col justify-center ">
      <Image
        source={require('../assets/logonew.png')}
        // className="w-screen"
        style={{
            width:"100%",
            height:"55%"
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
