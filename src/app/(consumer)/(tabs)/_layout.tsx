import { TabIcon } from "@/src/components/tab-icon.component";
import { Icons } from "@/src/constants/icons.constants";
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
            backgroundColor: "#0d203b",
            position: "absolute",
            borderTopColor: "#FFFFFF80",
            height: 70,
            alignItems: "center",
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
              <TabIcon focused={focused} title="Home" icon={Icons.home_icon} />
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
              <TabIcon
                focused={focused}
                title="History"
                icon={Icons.history_icon}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default ConsumerTabsLayout;
