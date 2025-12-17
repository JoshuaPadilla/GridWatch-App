import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { Icons } from "../constants/icons.constants";

const DeviceHighVoltage = () => {
  return (
    <View className="flex-row gap-4 items-center justify-between max-w-[50%] ">
      <View className="p-2 ">
        <Image
          source={Icons.status_warning}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View className="gap-2">
        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-warning rounded-full" />
          <Text className="text-white text-xl">Surge Hazard</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-warning rounded-full" />
          <Text className="text-white text-xl">Insulation Stress</Text>
        </View>

        <View className="flex-row gap-2  items-center">
          <View className="p-2 bg-warning rounded-full" />
          <Text className="text-white text-xl">Fire Risk</Text>
        </View>
      </View>
    </View>
  );
};

export default DeviceHighVoltage;
