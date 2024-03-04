import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import PlaceCard from "./PlaceCard";
import LoadingSprinner from "./LoadingSprinner";

const RecommondedPlaces = ({navigation}) => {
  const [nearByPlaces, setNearByPlaces] = useState(null);
  const [selectedplaces, setSelectedPlaces] = useState([]);
  const [planningPlaces,setPlaningPlaces]=useState([]);
  const imageArray=[];
  const route = useRoute();
  const location = route.params.location;

  useEffect(() => {
    console.log("location is ", location);
    handlePlaceSelect(location);
  }, []);

  const handlePlaceSelect = async (data) => {
    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/tourist_attractions",
        {
          location: data,
        }
      );

      console.log(response.data);
      setNearByPlaces(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    console.log("elected places are ",selectedplaces);

    const newPlanningPlaces = selectedplaces.map((index) => nearByPlaces[index]);
    console.log("New planing places ",newPlanningPlaces);
    newPlanningPlaces.forEach((place) => {
        imageArray.push({ name: place.name, photoref: place.photos[0].photo_reference })
        // setImageArray((prevArray) => [
        //   ...prevArray,
        //   { name: place.name, photoref: place.photos[0].photo_reference },
        // ]);
        console.log("setted Image array ",place);
      });
    
    setPlaningPlaces(newPlanningPlaces);
    console.log(planningPlaces);
    navigation.navigate("startinfo",{planningPlaces:newPlanningPlaces,imageArray:imageArray});
  };

  return (
    <View style={{ flex: 1,backgroundColor:"white" }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="p-4">
          {nearByPlaces ? (
            <View>
              {nearByPlaces.map((place, index) => (
                <PlaceCard
                  key={index}
                  index={index}
                  selectedplaces={selectedplaces}
                  setSelectedPlaces={setSelectedPlaces}
                  place={place}
                //   setImageArray={setImageArray}
                  imageArray={imageArray}
                />
              ))}
            </View>
          ) : (
            <LoadingSprinner/>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: "#276b1c",
          padding: 10,
          margin:15,
          borderRadius:20,
          alignItems: "center",
        }}
        onPress={handleButtonClick}
      >
        <Text style={{ color: "#ffffff" }} className="font-bold text-lg">Contrinue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecommondedPlaces;
