import HistoryCard from "@/src/components/history_card";
import { useDeviceStore } from "@/src/stores/device.store";
import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  const { getDeviceHistory, deviceId, deviceHistory } = useDeviceStore();
  useEffect(() => {
    if (deviceId) {
      getDeviceHistory(deviceId);
    }
  }, [getDeviceHistory, deviceId]);

  return (
    <SafeAreaView className=" flex-1 p-4 bg-background gap-2">
      <Text className="font-bold text-white text-2xl gap-4">History</Text>
      <ScrollView contentContainerClassName="pb-[100px] gap-2">
        {deviceHistory.length > 0 &&
          deviceHistory.map((history, idx) => (
            <HistoryCard history={history} key={idx} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
