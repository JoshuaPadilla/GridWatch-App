import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { Icons } from "../constants/icons.constants";

const DeviceStable = () => {
  return (
    <View className="flex-row gap-4 items-center justify-between max-w-[50%] ">
      <View className="p-2 ">
        <Image source={Icons.status_good} style={{ width: 100, height: 100 }} />
      </View>

      <View className="gap-2">
        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-safe rounded-full" />
          <Text className="text-white text-xl">Stable Voltage</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-safe rounded-full" />
          <Text className="text-white text-xl">Voltage within range</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-safe rounded-full" />
          <Text className="text-white text-xl">Optimal Performance</Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceStable;
