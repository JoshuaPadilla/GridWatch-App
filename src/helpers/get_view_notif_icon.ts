import { Icons } from "../constants/icons.constants";
import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";

export const getViewNotifIcon = (status?: NOTIFICATION_STATUS) => {
  if (!status) {
    return Icons.status_danger;
  }

  switch (status) {
    case NOTIFICATION_STATUS.CRITICAL:
      return Icons.status_danger;
    case NOTIFICATION_STATUS.RESOLVED:
      return Icons.status_good;
    case NOTIFICATION_STATUS.WARNING:
      return Icons.status_warning;
    default:
      return Icons.status_danger;
  }
};
