import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const PlaceCard = ({ place, selectedplaces = [], setSelectedPlaces, index,imageArray }) => {
  console.log("index ", index, "details ", place.name);
  

  useEffect(()=>{
    
  },[index])

  const selectingtheCard = () => {
    if (selectedplaces.includes(index)) {
      console.log("selected places included");
      setSelectedPlaces(selectedplaces.filter((number) => number != index));
    } else {
        console.log("selected places not included");
      setSelectedPlaces([...selectedplaces, index]);
    }
    console.log(selectedplaces);
  };

  return (
    <TouchableOpacity onPress={selectingtheCard}>
      <View
        style={{
          marginVertical: 10,
          padding: 10,
          // backgroundColor: "#f9f9f9",
          borderRadius: 10,
        }}
        className={`${selectedplaces.includes(index) ? "bg-green-300" : "bg-gray-200"} shadow-2xl`}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{place.name}</Text>
        <Text style={{ marginTop: 5 }}>{place.user_ratings_total} reviews</Text>
        <Text style={{ marginTop: 5 }}>{place.rating} rating</Text>

        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyBaDVwvh1ksOKMAb_s2QBEadlGsbc4A43k`,
          }} // Assuming you have a method to get the image URL
          style={{ width: "100%", height: 200, marginTop: 10, borderRadius: 10 }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;
