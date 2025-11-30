import { DeviceStatusType } from "./device_status.type";
import { LocationCoordinates } from "./location_coordinates";
import { LocationName } from "./location_name.interface";

export interface Device {
  _id: string;
  deviceId: string;
  status?: DeviceStatusType;
  locationCoordinates?: LocationCoordinates;
  locationName?: LocationName;
  createdAt?: string;
  updatedAt?: string;
}
