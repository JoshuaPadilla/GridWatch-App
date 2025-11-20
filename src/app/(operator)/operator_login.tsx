import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import app_log from "../../../assets/icons/grid-watch-logo.png";

const OperatorLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    if (!email || !pass) return;
    router.push("/(operator)/(tabs)/operator_home");
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-background">
      <KeyboardAvoidingView className="p-4 items-center justify-center w-[80%] gap-4 ">
        <Image source={app_log} style={{ width: 200, height: 200 }} />
        <Text className="font-semibold text-white text-3xl p-8">Login</Text>

        <View className="gap-2 p-2 w-[80%]">
          <View className="gap-2">
            <Text className="text-white">Email:</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="border border-white rounded-md px-2 color-white"
            />

            <Text className="text-white">Password:</Text>
            <TextInput
              value={pass}
              onChangeText={(text) => setPass(text)}
              className="border border-white rounded-md px-2 color-white"
              secureTextEntry
            />
          </View>
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
};

export default OperatorLogin;
