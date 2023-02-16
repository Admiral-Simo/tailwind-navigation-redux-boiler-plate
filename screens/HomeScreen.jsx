import { View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View className='mt-20 px-3'>
      <Text className='text-2xl text-slate-900'>Expo Boiler Plate</Text>
      <Text className='text-slate-500'>No need to waste 30-60 minutes on setups anymore</Text>
      <Text className='text-slate-500'>This setup inclues redux - navigation - tailwindcss</Text>
      
    </View>
  );
};

export default HomeScreen;
