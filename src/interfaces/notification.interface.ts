import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";

export interface Notification {
  deviceId: string;
  title: string;
  body: string;
  status: NOTIFICATION_STATUS;
  createdAt: Date;
}
