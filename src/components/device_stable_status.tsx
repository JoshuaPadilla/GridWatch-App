import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { StatusColor } from "../enum/status_color";

interface Props {
  outagePercentage: number;
}
const DeviceStable = ({ outagePercentage }: Props) => {
  return (
    <View className="flex-row gap-4 items-center justify-between max-w-[50%] ">
      <View className="p-2 items-center justify-center">
        <Text className="absolute font-bold text-white text-3xl">
          {Math.floor(outagePercentage * 100)}%
        </Text>
        <Progress.Circle
          progress={outagePercentage}
          size={100}
          borderWidth={0}
          thickness={8}
          strokeCap="round"
          direction="counter-clockwise"
          unfilledColor={StatusColor.stableUnfilledColor}
          color={StatusColor.filledColor}
        />
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
