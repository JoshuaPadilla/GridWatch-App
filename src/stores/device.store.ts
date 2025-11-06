import { create } from "zustand";
import { BASE_URL } from "../constants/BASE_URL";
import History from "../interfaces/history.interface";

interface StoreState {
  deviceId: string | undefined;
  deviceHistory: History[];
  getDeviceHistory: (deviceId: string) => void;
  setDeviceId: (deviceId: string) => void;
}

export const useDeviceStore = create<StoreState>((set) => ({
  deviceId: undefined,
  deviceHistory: [],
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
  setDeviceId: (deviceId) => {
    set({ deviceId: deviceId });
  },
}));
