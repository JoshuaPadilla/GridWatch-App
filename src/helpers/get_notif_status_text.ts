import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";
import {
  DEVICE_STATUS,
  DeviceStatusType,
} from "../interfaces/device_status.type";

export const getNotifText = (
  status?: DeviceStatusType,
  severity?: NOTIFICATION_STATUS
): string => {
  if (!status || !severity) {
    return "";
  }
  const messages: Record<
    DeviceStatusType,
    Record<NOTIFICATION_STATUS, string>
  > = {
    [DEVICE_STATUS.STABLE]: {
      [NOTIFICATION_STATUS.INFO]:
        "The system is currently operating within normal parameters with a stable power supply.",
      [NOTIFICATION_STATUS.WARNING]:
        "The system is stable, but minor fluctuations were briefly detected in the environment.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "System stability is at risk due to external environmental factors despite current normal readings.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "The system has successfully returned to a stable state after the recent power incident.",
    },
    [DEVICE_STATUS.LOW]: {
      [NOTIFICATION_STATUS.INFO]:
        "The device is currently running on a low voltage supply, which is expected for this power mode.",
      [NOTIFICATION_STATUS.WARNING]:
        "A low voltage condition has been detected; please monitor the device to ensure it doesn't drop below the operational threshold.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "Critical low voltage detected! The device may shut down unexpectedly or suffer brownout damage without immediate intervention.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "The low voltage condition has been resolved and the power levels have returned to normal.",
    },
    [DEVICE_STATUS.HIGH_VOLTAGE]: {
      [NOTIFICATION_STATUS.INFO]:
        "High voltage levels are being recorded as part of the current high-capacity power cycle.",
      [NOTIFICATION_STATUS.WARNING]:
        "Voltage levels are trending high; please inspect the power source to prevent potential circuit strain.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "Critical high voltage surge detected! Immediate disconnection or regulation is required to prevent permanent hardware failure.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "The high voltage surge has been mitigated and levels have stabilized to safe operating limits.",
    },
    [DEVICE_STATUS.CURRENT_OVERLOAD]: {
      [NOTIFICATION_STATUS.INFO]:
        "Current draw is at maximum capacity for the current operational load.",
      [NOTIFICATION_STATUS.WARNING]:
        "Current overloading detected; the device is drawing more power than recommended, which may lead to overheating.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "Severe current overload detected! The system is at risk of blowing internal fuses or causing a thermal event.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "Current levels have returned to normal after a successful load reduction.",
    },
    [DEVICE_STATUS.FLUCTUATING]: {
      [NOTIFICATION_STATUS.INFO]:
        "Minor power fluctuations are being recorded but do not currently impact system performance.",
      [NOTIFICATION_STATUS.WARNING]:
        "The power supply is fluctuating; this instability may cause erratic behavior in sensitive electronic components.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "Extreme power fluctuations detected! The system integrity is compromised; power conditioning is urgently required.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "Power supply frequency has stabilized and fluctuations are no longer being detected.",
    },
    [DEVICE_STATUS.NO_POWER]: {
      [NOTIFICATION_STATUS.INFO]:
        "The device is currently scheduled for a powered-down state.",
      [NOTIFICATION_STATUS.WARNING]:
        "A loss of power has been detected; the device is now relying on backup sources or is currently unresponsive.",
      [NOTIFICATION_STATUS.CRITICAL]:
        "Total power failure! The system is offline and requires an immediate manual restart or hardware check.",
      [NOTIFICATION_STATUS.RESOLVED]:
        "Power has been fully restored and the system is rebooting into its operational state.",
    },
  };

  return messages[status][severity];
};
