import React from "react";
import { View } from "react-native";
import { DeviceStatusType } from "../interfaces/device_status.type";
import DeviceCurrentOverload from "./device_current_overload_status";
import DeviceFluctuating from "./device_fluctuating_status";
import DeviceHighVoltage from "./device_high_voltage_status";
import DeviceLowVoltage from "./device_low_voltage_status";
import DeviceNoPower from "./device_no_power_status";
import DeviceStable from "./device_stable_status";

interface Props {
  status: DeviceStatusType;
}

const HomeStatus = ({ status }: Props) => {
  return (
    <View className="w-full bg-card_bg rounded-md p-6 gap-2">
      {status === "stable" && <DeviceStable />}
      {status === "low voltage" && <DeviceLowVoltage />}
      {status === "current overloading" && <DeviceCurrentOverload />}
      {status === "no_power" && <DeviceNoPower />}
      {status === "high voltage" && <DeviceHighVoltage />}
      {status === "fluctuating" && <DeviceFluctuating />}
    </View>
  );
};

export default HomeStatus;
