import { HISTORY_STATUS } from "../enum/history_status";

export default interface History {
  deviceId: string;
  time: string;
  title: string;
  body: string;
  status: HISTORY_STATUS;
  createdAt: Date;
}
