import React from 'react'
import { ActivityIndicator, View,Text } from 'react-native'

const LoadingSprinner = () => {
  return (
    <View className="flex-1 w-full h-screen  flex-col justify-center items-center">
        <ActivityIndicator size="large" color="#276b1c"/>
        <Text className="text-lg font-semibold">Loading...</Text>
    </View>
  )
}

export default LoadingSprinner