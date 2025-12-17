import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { Icons } from "../constants/icons.constants";

const DeviceCurrentOverload = () => {
  return (
    <View className="flex-row gap-4 items-center justify-between max-w-[50%] ">
      <View className="p-2 ">
        <Image
          source={Icons.status_danger}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View className="gap-2">
        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-danger rounded-full" />
          <Text className="text-white text-xl">Thermal Protection</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-danger rounded-full" />
          <Text className="text-white text-xl">Excessive Load</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-danger rounded-full" />
          <Text className="text-white text-xl">Hardware Degradation</Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceCurrentOverload;
