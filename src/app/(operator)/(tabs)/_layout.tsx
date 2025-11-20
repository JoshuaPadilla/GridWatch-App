import { TabIcon } from "@/src/components/tab-icon.component";
import { Icons } from "@/src/constants/icons.constants";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const OperatorTabLayout = () => {
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
          key="operator_home"
          name="operator_home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <TabIcon focused={focused} title="Home" icon={Icons.home_icon} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default OperatorTabLayout;
