import { TabIcon } from "@/src/components/tab-icon.component";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const ConsumerTabsLayout = () => {
  return (
    <>
      <StatusBar style="auto" translucent />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            position: "absolute",
            borderTopColor: "#0061FF1A",
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          key="home"
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <TabIcon focused={focused} title="Home" />
            ),
          }}
        />

        <Tabs.Screen
          key="history"
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <TabIcon focused={focused} title="History" />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default ConsumerTabsLayout;
