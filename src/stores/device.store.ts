import { create } from "zustand";
import { BASE_URL } from "../constants/BASE_URL";
import { Device } from "../interfaces/device.interface";
import { DevicePayload } from "../interfaces/device_payload.interface";
import History from "../interfaces/history.interface";

interface StoreState {
  loading: boolean;
  deviceId: string | undefined;
  deviceHistory: History[];
  getDeviceHistory: (deviceId: string) => void;
  setDeviceId: (deviceId: string) => void;
  deviceLast20Payloads: DevicePayload[];
  getDeviceDetails: (
    deviceId: string
  ) => Promise<Device | undefined> | undefined;
}

export const useDeviceStore = create<StoreState>((set) => ({
  loading: false,
  deviceId: undefined,
  deviceHistory: [],
  deviceLast20Payloads: [],
  getDeviceHistory: async (deviceId) => {
    try {
      const res = await fetch(`${BASE_URL}history/${deviceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        set({ deviceHistory: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
  getDeviceDetails: async (deviceId) => {
    try {
      const res = await fetch(`${BASE_URL}device/${deviceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        return data as Device;
      }

      return undefined;
    } catch (error) {
      console.log(error);
    }
  },

  setDeviceId: (deviceId) => {
    set({ deviceId: deviceId });
  },
}));
