import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import axios from "axios";
import LoadingSprinner from "./LoadingSprinner";
import PlanCard from "./PlanCard";

const Planshower = () => {
  const [createdPlan, setCreatedPlan] = useState(null);
  const route = useRoute();
  const planData = route.params.planData;
  const startLocation = route.params.location;
  const startDate = route.params.startDate;
  const imageArray=route.params.imageArray;

  useEffect(() => {
    console.log("plan data is ", planData);
    console.log("start location ", startLocation);
    console.log("start data ", startDate);
    getPlan();
  }, []);

  const getPlan = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:5000/plan_tour", {
        startLocation: startLocation,
        startDate: startDate,
        planData: planData,
      });

      console.log(response.data);
      setCreatedPlan(response.data);
      // setNearByPlaces(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <View style={{ flex: 1 }}>
  <ScrollView style={{ flex: 1 }}>
    <View className="p-4">
      {createdPlan ? (
        <View>
          {createdPlan.map((item, index) => (
            <PlanCard
            item={item}
            imageArray={imageArray}
            />
          ))}
        </View>
      ) : (
        <LoadingSprinner/>
      )}
    </View>
  </ScrollView>
  
   
</View>
};

export default Planshower;
