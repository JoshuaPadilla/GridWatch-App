import NotificationCard from "@/src/components/notification-card.component";
import { useDeviceStore } from "@/src/stores/device.store";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  const { getDeviceHistory, deviceId, deviceHistory } = useDeviceStore();
  console.log(deviceHistory);

  useEffect(() => {
    if (deviceId) {
      getDeviceHistory(deviceId);
    }
  }, [getDeviceHistory, deviceId]);

  return (
    <SafeAreaView className=" flex-1 p-6 bg-background">
      {deviceHistory.length > 0 &&
        deviceHistory.map((history, idx) => (
          <NotificationCard history={history} key={idx} />
        ))}
    </SafeAreaView>
  );
};

export default History;
