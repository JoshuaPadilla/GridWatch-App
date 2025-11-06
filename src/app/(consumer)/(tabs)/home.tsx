import { Icons } from "@/src/constants/icons.constants";
import socket from "@/src/lib/socket";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { sensorId } = useLocalSearchParams<{ sensorId: string }>();

  useEffect(() => {
    socket.on(`sensorPayload`, (data) => {
      console.log(data);
    });
  }, [sensorId]);

  return (
    <SafeAreaView className="flex-1 bg-background p-6 gap-4">
      {/* Header */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-2 items-center">
          <Image
            source={Icons.location_icon}
            style={{ width: 25, height: 25 }}
          />

          <Text className="text-white text-xl">Brgy Rawis</Text>
        </View>

        <TouchableOpacity>
          <Image source={Icons.notif_icon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>

      {/* Status */}
      <View className="w-full bg-card_bg rounded-md p-6 gap-2">
        <View className="flex-row gap-2 items-center">
          <Image source={Icons.grid_status} style={{ width: 20, height: 20 }} />

          <Text className="text-white text-md">Grid status</Text>
        </View>

        <View className="flex-row gap-4 items-center justify-between max-w-[50%] ">
          <View className="p-2 ">
            <Image
              source={Icons.status_good}
              style={{ width: 100, height: 100 }}
            />
          </View>

          <View className="gap-2">
            <View className="flex-row gap-2  items-center">
              <View className="p-2 bg-safe rounded-full" />
              <Text className="text-white text-xl">Stable Voltage</Text>
            </View>

            <View className="flex-row gap-2  items-center">
              <View className="p-2 bg-safe rounded-full" />
              <Text className="text-white text-xl">Stable Current</Text>
            </View>

            <View className="flex-row gap-2  items-center">
              <View className="p-2 bg-safe rounded-full" />
              <Text className="text-white text-xl">Low chance of Outage</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Voltage and Current reading */}
      <View className="flex-row w-full gap-2">
        <View className="bg-card_bg flex-1 p-2 rounded-md">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-lg">Voltage</Text>

            <Image
              source={Icons.voltage_icon}
              style={{ width: 40, height: 40 }}
            />
          </View>
        </View>

        <View className="bg-card_bg flex-1 p-2 rounded-md">
          <View className="flex-row justify-between items-center">
            <Text className="text-white">Voltage</Text>

            <Image
              source={Icons.voltage_icon}
              style={{ width: 40, height: 40 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
