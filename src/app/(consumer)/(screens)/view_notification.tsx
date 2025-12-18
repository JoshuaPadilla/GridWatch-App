import { getNotifColor } from "@/src/helpers/get_notif_status_color";
import { getNotifText } from "@/src/helpers/get_notif_status_text";
import { getViewNotifIcon } from "@/src/helpers/get_view_notif_icon";
import { useDeviceStore } from "@/src/stores/device.store";
import { useNotificationStore } from "@/src/stores/notificationStore";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewNotification = () => {
  const { selectedNotif } = useNotificationStore();
  const { currentDevice } = useDeviceStore();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-4 py-8 gap-8">
      <View className="h-[30%] w-full items-center justify-center gap-4">
        <Image
          source={getViewNotifIcon(selectedNotif?.status)}
          style={{ width: 150, height: 150 }}
        />

        <Text
          className={`font-bold text-2xl`}
          style={{ color: getNotifColor(selectedNotif?.status) }}
        >
          {selectedNotif?.status.toLocaleUpperCase()} !!!
        </Text>
      </View>

      <View className="w-full items-center justify-center gap-4 px-4 pt-4 pb-8 bg-white/20 rounded-lg">
        <Text className={`font-normal text-lg text-white/80 text-justify`}>
          {getNotifText(currentDevice?.status, selectedNotif?.status)}
        </Text>
      </View>

      <TouchableOpacity
        className="w-[80%] p-4 items-center bg-primary rounded-sm self-center absolute bottom-16"
        onPress={handleBack}
      >
        <Text className="text-white/80">Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ViewNotification;
