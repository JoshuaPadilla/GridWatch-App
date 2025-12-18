import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NotifCardColor } from "../enum/notif_card_color";
import { getNotifIcon } from "../helpers/get_notif_icon";
import { getTimeAgo } from "../helpers/get_time_ago";
import { Notification } from "../interfaces/notification.interface";
import { useNotificationStore } from "../stores/notificationStore";

interface Props {
  notification: Notification;
}

const NotificationCard = ({ notification }: Props) => {
  const { markedAsRead, setSelectedNotif, subtractUnreadNotif } =
    useNotificationStore();

  const icon = getNotifIcon(notification.status);

  const bg_color = notification.read
    ? NotifCardColor.notRead
    : NotifCardColor.read;

  const handleViewNotif = () => {
    subtractUnreadNotif();
    markedAsRead(notification._id);
    setSelectedNotif(notification);
    router.push("/(consumer)/(screens)/view_notification");
  };

  const timeAgo = getTimeAgo(notification.createdAt.toString());

  return (
    <TouchableOpacity
      className="p-4 rounded-md gap-2"
      style={{ backgroundColor: bg_color }}
      onPress={handleViewNotif}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4 items-center">
          <Image source={icon} style={{ height: 30, width: 30 }} />

          <Text className="text-lg text-white font-bold">
            {notification.title}
          </Text>
        </View>

        <Text className="text-xs text-white/50">{timeAgo}</Text>
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
