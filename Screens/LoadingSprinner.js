import React from 'react'
import { ActivityIndicator, View,Text } from 'react-native'

const LoadingSprinner = () => {
  return (
    <View className="flex-1 w-full h-screen  flex-col justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff"/>
        <Text>Loading...</Text>
    </View>
  )
}

export default LoadingSprinner