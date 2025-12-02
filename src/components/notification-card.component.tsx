import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getNotifIcon } from "../helpers/get_notif_icon";
import { Notification } from "../interfaces/notification.interface";

interface Props {
  notification: Notification;
}

const NotificationCard = ({ notification }: Props) => {
  const icon = getNotifIcon(notification.status);

  return (
    <TouchableOpacity className="bg-card_bg p-4 rounded-md gap-2">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4 items-center">
          <Image source={icon} style={{ height: 30, width: 30 }} />

          <Text className="text-lg text-white font-bold">
            {notification.title}
          </Text>
        </View>

        <Text className="text-sm text-white/50">1 day ago</Text>
      </View>

      {/* Body */}
      <View className="gap-4">
        <Text className="text-md text-white/70 text-balance">
          {notification.body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
