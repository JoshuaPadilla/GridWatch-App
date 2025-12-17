import HomeStatus from "@/src/components/home_status";
import { Icons } from "@/src/constants/icons.constants";
import { Device } from "@/src/interfaces/device.interface";
import socket from "@/src/lib/socket";
import { useDeviceStore } from "@/src/stores/device.store";
import { usePayloadStore } from "@/src/stores/usePayloadStore";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { deviceId, getDeviceDetails } = useDeviceStore();
  const {
    deviceLast20Payloads,
    getDeviceLast20Payloads,
    getLatestPayload,
    updateDeviceLast20Payloads,
    loading,
  } = usePayloadStore();

  const [current, setCurrent] = useState<number>(0);
  const [voltage, setVoltage] = useState<number>(0);

  const [device, setDevice] = useState<Device>();
  const [payloadStatus, setPayloadStatus] = useState();
  // const [updateTimer, setUpdateTimer] = useState(0);

  // useEffect(() => {
  //   // Start the interval
  //   const intervalId = setInterval(() => {
  //     // Use the functional update form to get the latest state
  //     setUpdateTimer((prevSeconds) => prevSeconds + 1);
  //   }, 1000); // 1000ms = 1 second

  //   // Return the cleanup function
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  useEffect(() => {
    if (deviceId) {
      socket.emit("connectDevice", { deviceId });
    }

    const fetchDeviceDetails = async () => {
      if (deviceId) {
        getDeviceLast20Payloads(deviceId);
        const deviceDetails = await getDeviceDetails(deviceId);

        const latestPayload = await getLatestPayload(deviceId);

        if (deviceDetails) {
          setDevice(deviceDetails);
        }

        if (latestPayload) {
          setVoltage(latestPayload.voltage);
          setCurrent(latestPayload.current);
        }
      }
    };

    fetchDeviceDetails();
  }, [deviceId, getDeviceDetails, getDeviceLast20Payloads, getLatestPayload]);

  // console.log(updateTimer);
  useEffect(() => {
    socket.on(`sensorPayload`, (data) => {
      setCurrent(data.current);
      setVoltage(data.voltage);
      updateDeviceLast20Payloads(data);

      // setUpdateTimer(0);
    });

    socket.on("changeDeviceStatus", (data) => {
      setDevice((prev) => {
        // 1. Guard clause: If device doesn't exist yet, do nothing (or return undefined)
        if (!prev) return prev;

        // 2. Safe to spread because we know prev is defined here
        return { ...prev, status: data.status };
      });
    });
  }, [updateDeviceLast20Payloads]);

  const handleGoToNotifications = () => {
    router.push("/notifications");
  };

  const voltageData = deviceLast20Payloads.map((data) => ({
    value: data.voltage,
  }));

  const currentData = deviceLast20Payloads.map((data) => ({
    value: data.current,
  }));

  return (
    <SafeAreaView className="flex-1 bg-background p-4 gap-4">
      {/* Header */}
      <View className="flex-row justify-between mb-4">
        <View className="flex-row gap-2 items-center">
          <Image
            source={Icons.location_icon}
            style={{ width: 25, height: 25 }}
          />

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            className="pr-10 max-w-[80%]"
          >
            <Text className="text-white text-xl">{`${device?.locationName?.road} ${device?.locationName?.brgy}`}</Text>
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={handleGoToNotifications}
          className="p-2 items-center justify-center"
        >
          <View className="size-6 rounded-b-xl rounded-t-xl bg-primary items-center justify-center absolute z-10 top-0 right-0">
            <Text className=" text-white ">1</Text>
          </View>
          <Image source={Icons.notif_icon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerClassName="pb-[100px] gap-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Status */}
        <HomeStatus status={device?.status || "no_power"} />

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
              {voltage} <Text className="text-white text-xl">volts</Text>
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
              {current} <Text className="text-white text-xl">amps</Text>
            </Text>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <>
            {/* Voltage Chart */}
            <View className="gap-4 bg-card_bg rounded-md p-4">
              <View className=" flex-row gap-2 items-end">
                <Text className="text-white text-lg">Voltage </Text>
                <Text className="text-white/50 text-sm">
                  last updated: 3s ago
                </Text>
              </View>

              <View className="flex-row ">
                <View className="absolute left-0 top-0 h-[100px] justify-between items-end">
                  <Text className="text-white text-xs">250</Text>
                  <Text className="text-white text-xs">200</Text>
                  <Text className="text-white text-xs">150</Text>
                  <Text className="text-white text-xs">0</Text>
                </View>

                <LineChart
                  data={voltageData}
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

            {/* current Chart */}
            <View className="gap-4 bg-card_bg rounded-md p-4">
              <View className=" flex-row gap-2 items-end">
                <Text className="text-white text-lg">Current </Text>
                <Text className="text-white/50 text-sm">
                  last updated: 3s ago
                </Text>
              </View>

              <View className="flex-row ">
                <View className="absolute left-0 top-0 h-[100px] justify-between items-end">
                  <Text className="text-white text-xs">250</Text>
                  <Text className="text-white text-xs">200</Text>
                  <Text className="text-white text-xs">150</Text>
                  <Text className="text-white text-xs">0</Text>
                </View>

                <LineChart
                  data={currentData}
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
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
