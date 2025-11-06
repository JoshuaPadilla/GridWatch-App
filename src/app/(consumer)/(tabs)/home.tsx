import { payload } from "@/dev-data/payload-data";
import { Icons } from "@/src/constants/icons.constants";
import socket from "@/src/lib/socket";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { sensorId } = useLocalSearchParams<{ sensorId: string }>();

  useEffect(() => {
    socket.on(`sensorPayload`, (data) => {
      console.log(data);
    });
  }, [sensorId]);

  const voltageMockData = payload.map((data) => ({ value: data.voltage }));

  return (
    <SafeAreaView className="flex-1 bg-background p-6 gap-4">
      {/* Header */}
      <View className="flex-row justify-between mb-4">
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

      <ScrollView
        contentContainerClassName="pb-[100px] gap-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Status */}
        <View className="w-full bg-card_bg rounded-md p-6 gap-2">
          <View className="flex-row gap-2 items-center">
            <Image
              source={Icons.grid_status}
              style={{ width: 20, height: 20 }}
            />

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
          {/* Voltage */}
          <View className="bg-card_bg flex-1 p-4 rounded-md">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-lg">Voltage</Text>

              <Image
                source={Icons.voltage_icon}
                style={{ width: 40, height: 40 }}
              />
            </View>

            <Text className="text-4xl text-white">
              235 <Text className="text-white text-xl">volts</Text>
            </Text>
          </View>

          {/* Current */}
          <View className="bg-card_bg flex-1 p-4 rounded-md">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-lg">Current</Text>

              <Image
                source={Icons.current_icon}
                style={{ width: 40, height: 40 }}
              />
            </View>

            <Text className="text-4xl text-white">
              235 <Text className="text-white text-xl">amps</Text>
            </Text>
          </View>
        </View>

        {/* Voltage Chart */}
        <View className="gap-4 bg-card_bg rounded-md p-4">
          <View className=" flex-row gap-2 items-end">
            <Text className="text-white text-lg">Voltage </Text>
            <Text className="text-white/50 text-sm">last updated: 3s ago</Text>
          </View>

          <View className="flex-row ">
            <View className="absolute left-0 top-0 h-[100px] justify-between items-end">
              <Text className="text-white text-xs">250</Text>
              <Text className="text-white text-xs">200</Text>
              <Text className="text-white text-xs">150</Text>
              <Text className="text-white text-xs">0</Text>
            </View>

            <LineChart
              data={voltageMockData}
              hideDataPoints
              hideAxesAndRules
              isAnimated
              thickness={2}
              maxValue={255}
              curved
              color="#359EFF"
              adjustToWidth
              yAxisColor={"#0d203b"}
              stepValue={80}
              height={100}
              startFillColor="#359EFF70"
              endFillColor="#1f293790"
              areaChart
              yAxisLabelSuffix=" v"
              hideYAxisText
            />
          </View>
        </View>

        {/* Voltage Chart */}
        <View className="gap-4 bg-card_bg rounded-md p-4">
          <View className=" flex-row gap-2 items-end">
            <Text className="text-white text-lg">Current </Text>
            <Text className="text-white/50 text-sm">last updated: 3s ago</Text>
          </View>

          <View className="flex-row ">
            <View className="absolute left-0 top-0 h-[100px] justify-between items-end">
              <Text className="text-white text-xs">250</Text>
              <Text className="text-white text-xs">200</Text>
              <Text className="text-white text-xs">150</Text>
              <Text className="text-white text-xs">0</Text>
            </View>

            <LineChart
              data={voltageMockData}
              hideDataPoints
              hideAxesAndRules
              isAnimated
              thickness={2}
              maxValue={255}
              curved
              color="#359EFF"
              adjustToWidth
              yAxisColor={"#0d203b"}
              stepValue={80}
              height={100}
              startFillColor="#359EFF70"
              endFillColor="#1f293790"
              areaChart
              yAxisLabelSuffix=" v"
              hideYAxisText
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
