import { create } from "zustand";
import { BASE_URL } from "../constants/BASE_URL";
import { Notification } from "../interfaces/notification.interface";

interface StoreState {
  loading: boolean;
  notifications: Notification[];
  getNotifications: (deviceId: string) => void;
  addNotification: (notification: Notification) => void;
}

export const useNotificationStore = create<StoreState>((set) => ({
  loading: false,
  notifications: [],
  getNotifications: async (deviceId) => {
    try {
      set({ loading: true });
      const res = await fetch(`${BASE_URL}notification/${deviceId}`, {
        method: "Get",
      });

      const data = await res.json();

      if (res.ok) {
        set({ notifications: data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
  addNotification: (notification) => {
    set((state) => {
      const updatedNotif = [notification, ...state.notifications];
      return { notifications: updatedNotif };
    });
  },
}));
