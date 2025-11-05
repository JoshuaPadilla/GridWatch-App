import socket from "@/src/lib/socket";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { sensorId } = useLocalSearchParams<{ sensorId: string }>();

  useEffect(() => {
    socket.on(`sensorPayload`, (data) => {
      console.log(data);
    });
  }, [sensorId]);

  return (
    <SafeAreaView>
      <Text>ConsumerHome</Text>
    </SafeAreaView>
  );
};

export default Home;
