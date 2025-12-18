import { NOTIFICATION_STATUS } from "../enum/notification_status.enum";

export interface Notification {
  _id: string;
  deviceId: string;
  title: string;
  body: string;
  status: NOTIFICATION_STATUS;
  createdAt: Date;
  read: boolean;
  outagePercentage: number;
}
