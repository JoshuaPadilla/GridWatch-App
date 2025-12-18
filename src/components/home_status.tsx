import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DeviceStatusType } from "../interfaces/device_status.type";
import socket from "../lib/socket";
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
  const [outagePercentage, setOutagePercentage] = useState(0);

  useEffect(() => {
    socket.on("prediction", (data) => {
      setOutagePercentage(data.riskScore);
    });
  }, []);
  return (
    <View className="w-full bg-card_bg rounded-md p-6 gap-2">
      {status === "stable" && (
        <DeviceStable outagePercentage={outagePercentage} />
      )}
      {status === "low voltage" && (
        <DeviceLowVoltage outagePercentage={outagePercentage} />
      )}
      {status === "current overloading" && (
        <DeviceCurrentOverload outagePercentage={outagePercentage} />
      )}
      {status === "no_power" && (
        <DeviceNoPower outagePercentage={outagePercentage} />
      )}
      {status === "high voltage" && (
        <DeviceHighVoltage outagePercentage={outagePercentage} />
      )}
      {status === "fluctuating" && (
        <DeviceFluctuating outagePercentage={outagePercentage} />
      )}
    </View>
  );
};

export default HomeStatus;
