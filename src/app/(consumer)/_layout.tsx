import socket from "@/src/lib/socket";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";

const ConsumerLayout = () => {
  const { sensorId } = useLocalSearchParams<{ sensorId: string }>();

  useEffect(() => {
    if (!sensorId) return;

    if (!socket.connected) {
      socket.connect();

      console.log("Socket connected globally in RootLayout");
      socket.emit("connectDevice", { sensorId: sensorId });
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
        console.log("Socket disconnected globally in RootLayout");
      }
    };
  }, [sensorId]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ConsumerLayout;
