import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const PlanCard = ({ item }) => {
  const route = useRoute();
  const imageArray = route.params.imageArray;
  useEffect(() => {
    console.log(imageArray);
  }, []);


  function findPhotoRefByName(name) {
    const place = imageArray.find(place => place.name === name);
    return place ? place.photoref : null;
}
  return (
    <View className="bg-white shadow-2xl rounded-2xl p-4 m-2">
      <View className="flex flex-row justify-between  w-full">
        <View className="flex flex-row justify-start items-center w-1/2">
          <AntDesign name="star" size={24} color="#276b1c" />
          <View className="flex flex-col ml-1">
            <Text className="font-bold text-[17px] text-gray-600">From</Text>
            <Text className="font-bold text-[14px]">
              {item.start_loc.substring(0, 15)}
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-start items-center w-1/2">
          <AntDesign name="star" size={24} color="#276b1c" />
          <View className="flex flex-col ml-1">
            <Text className="font-bold text-[17px] text-gray-600">TO</Text>
            <Text className="font-bold text-[14px]">{item.end_loc}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between  w-full">
        <View className="flex flex-row justify-start items-center my-3 w-1/2">
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={28}
            color="#276b1c"
          />
          <Text className="font-bold text-[14px] ml-1">{item.distance} km</Text>
        </View>
        <View className="flex flex-row justify-start items-center my-3 w-1/2">
        <Feather name="clock" size={24} color="#276b1c" />
          <Text className="font-bold text-[14px] ml-1">{parseFloat(item.duration).toFixed(2)} Hours</Text>
        </View>
      </View>
      <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${findPhotoRefByName(item.end_loc)}&key=AIzaSyBaDVwvh1ksOKMAb_s2QBEadlGsbc4A43k`,
          }} // Assuming you have a method to get the image URL
          style={{ width: "100%", height: 200, marginTop: 10, borderRadius: 10 }}
          resizeMode="cover"
        />
      
      <Text className="text-gray-800 text-justify mt-1">{item.description}</Text>
      <View className="flex flex-col justify-between  w-full bg-slate-100 p-1 rounded-md">
        <View className="flex flex-row justify-start items-center my-3 w-full">
        <Entypo name="location" size={24} color="green" />
          <Text className="font-bold text-[14px] ml-1">Estimated On Location Time: {parseFloat(item.onlocationTime).toFixed(2)} </Text>
        </View>
        <View className="flex flex-row justify-start items-center my-3 w-full">
        <Foundation name="target" size={26} color="green" />
          <Text className="font-bold text-[14px] ml-1">Average Spending Time: {item["spending time"]} hours</Text>
        </View>
        <View className="flex flex-row justify-start items-center my-3 w-full">
        <MaterialIcons name="time-to-leave" size={25} color="green" />
          <Text className="font-bold text-[14px] ml-1">Estimated Leaving Time: {parseFloat(item.leavingTime).toFixed(2)}</Text>
        </View>
      </View>


    </View>
  );
};

export default PlanCard;
