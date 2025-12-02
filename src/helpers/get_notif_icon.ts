import { Icons } from "../constants/icons.constants";
import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";

export const getNotifIcon = (status: NOTIFICATION_STATUS) => {
  switch (status) {
    case NOTIFICATION_STATUS.WARNING:
      return Icons.history_status_warning;
    case NOTIFICATION_STATUS.CRITICAL:
      return Icons.history_status_outage;
    case NOTIFICATION_STATUS.RESOLVED:
      return Icons.history_status_restored;
    case NOTIFICATION_STATUS.INFO:
      return Icons.history_status_restored;
    default:
      return Icons.history_status_outage;
  }
};
