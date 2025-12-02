import NotificationCard from "@/src/components/notification-card.component";
import { useDeviceStore } from "@/src/stores/device.store";
import { useNotificationStore } from "@/src/stores/notificationStore";
import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  const { deviceId } = useDeviceStore();
  const { getNotifications, notifications } = useNotificationStore();

  useEffect(() => {
    if (deviceId) {
      getNotifications(deviceId);
    }
  }, [deviceId, getNotifications]);
  return (
    <SafeAreaView className=" flex-1 p-4 bg-background gap-2">
      <Text className="font-bold text-white text-2xl gap-4">Notifications</Text>

      <ScrollView contentContainerClassName="pb-[100px] gap-2">
        {notifications.length > 0 &&
          notifications.map((notification, key) => (
            <NotificationCard key={key} notification={notification} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
