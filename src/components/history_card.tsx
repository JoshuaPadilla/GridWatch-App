import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getHistoryIcon } from "../helpers/get_history_icon";
import { getTimeAgo } from "../helpers/get_time_ago";
import History from "../interfaces/history.interface";

interface Props {
  history: History;
}

const HistoryCard = ({ history }: Props) => {
  const icon = getHistoryIcon(history.status);
  const timeAgo = getTimeAgo(history.createdAt.toString());
  return (
    <TouchableOpacity className="p-4 rounded-md gap-2 bg-white/20">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4 items-center">
          <Image source={icon} style={{ height: 30, width: 30 }} />

          <Text className="text-lg text-white font-bold">{history.title}</Text>
        </View>

        <Text className="text-xs text-white/50">{timeAgo}</Text>
      </View>

      {/* Body */}
      <View className="gap-4">
        <Text className="text-md text-white/70 text-balance">
          {history.body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;
