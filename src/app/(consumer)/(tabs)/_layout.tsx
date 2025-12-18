import { TabIcon } from "@/src/components/tab-icon.component";
import { Icons } from "@/src/constants/icons.constants";
import { Notification } from "@/src/interfaces/notification.interface";
import socket from "@/src/lib/socket";
import { useNotificationStore } from "@/src/stores/notificationStore";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

const ConsumerTabsLayout = () => {
  const { addNotification, addUnreadNotif } = useNotificationStore();

  useEffect(() => {
    // 1. Define the handler function separately
    const handler = (data: Notification) => {
      addUnreadNotif();
      addNotification(data);
    };

    // 2. Attach the listener
    socket.on("notification", handler);

    // 3. RETURN CLEANUP FUNCTION
    return () => {
      // Remove the listener when the component unmounts or dependencies change
      socket.off("notification", handler);
    };
  }, [addNotification]);

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
