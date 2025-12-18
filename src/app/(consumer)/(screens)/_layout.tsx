import { Stack } from "expo-router";
import React from "react";

const ScreensLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="view_notification" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ScreensLayout;
