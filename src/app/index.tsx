import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [sensorId, setSensorId] = useState("");

  const handleSubmit = () => {
    if (!sensorId.trim()) console.log("Enter sensor id");

    router.push({
      pathname: "/(consumer)/(tabs)/home",
      params: { sensorId },
    });
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <KeyboardAvoidingView className="p-4 items-center justify-center w-[80%] gap-4 ">
        <View className="gap-2 p-2 w-[80%]">
          <Text className="text-white">Enter Device ID:</Text>
          <TextInput
            value={sensorId}
            onChangeText={(text) => setSensorId(text)}
            className="border border-white rounded-md px-2 color-white"
          />
        </View>

        <TouchableOpacity
          className="mt-4 bg-orange-300 px-8 py-2 rounded-md"
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
