import socket from "@/src/lib/socket";
import { useDeviceStore } from "@/src/stores/device.store";
import { Stack } from "expo-router";
import React, { useEffect } from "react";

const ConsumerLayout = () => {
  const { deviceId } = useDeviceStore();

  useEffect(() => {
    if (!deviceId) return;

    if (!socket.connected) {
      socket.connect();

      console.log("Socket connected globally in RootLayout");
      socket.emit("connectDevice", { sensorId: deviceId });
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
        console.log("Socket disconnected globally in RootLayout");
      }
    };
  }, [deviceId]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ConsumerLayout;
