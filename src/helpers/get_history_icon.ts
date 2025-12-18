import { Icons } from "../constants/icons.constants";
import { HISTORY_STATUS } from "../enum/history_status";

export const getHistoryIcon = (status: HISTORY_STATUS) => {
  switch (status) {
    case HISTORY_STATUS.NOTIF:
      return Icons.history_icon;
    case HISTORY_STATUS.OUTAGE:
      return Icons.history_status_outage;
    case HISTORY_STATUS.RESTORED:
      return Icons.history_status_restored;
    default:
      return Icons.history_icon;
  }
};
