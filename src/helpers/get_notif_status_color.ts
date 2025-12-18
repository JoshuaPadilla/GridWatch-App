import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";

export const getNotifColor = (status?: NOTIFICATION_STATUS) => {
  if (!status) {
    return "#4ade80";
  }

  switch (status) {
    case NOTIFICATION_STATUS.WARNING:
      return "#fde047";
    case NOTIFICATION_STATUS.CRITICAL:
      return "#f87171";
    case NOTIFICATION_STATUS.RESOLVED:
      return "#4ade80";
    case NOTIFICATION_STATUS.INFO:
      return "#4ade80";
    default:
      return "#4ade80";
  }
};
