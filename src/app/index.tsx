import { Image } from "expo-image";
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
import app_log from "../../assets/icons/grid-watch-logo.png";
import { useDeviceStore } from "../stores/device.store";

export default function Index() {
  const { setDeviceId } = useDeviceStore();

  const [inputDeviceId, setInputDeviceId] = useState("");

  const handleSubmit = () => {
    if (inputDeviceId) {
      setDeviceId(inputDeviceId);

      router.push({
        pathname: "/(consumer)/(tabs)/home",
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <KeyboardAvoidingView className="p-4 items-center justify-center w-[80%] gap-4 ">
        <View className="gap-2 p-2 w-[80%]">
          <Image source={app_log} style={{ width: 200, height: 200 }} />
          <Text className="text-white">Enter Device ID:</Text>
          <TextInput
            value={inputDeviceId}
            onChangeText={(text) => setInputDeviceId(text)}
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
