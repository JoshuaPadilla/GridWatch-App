import { create } from "zustand";
import { BASE_URL } from "../constants/BASE_URL";
import { Notification } from "../interfaces/notification.interface";

interface StoreState {
  loading: boolean;
  selectedNotif: Notification | undefined;
  notifications: Notification[];
  unreadNotif: number;
  getNotifications: (deviceId: string) => void;
  addNotification: (notification: Notification) => void;
  markedAsRead: (notifId: string) => void;
  setSelectedNotif: (notification: Notification) => void;
  addUnreadNotif: () => void;
  subtractUnreadNotif: () => void;
  getUnreadNotifCount: (deviceId: string) => void;
}

export const useNotificationStore = create<StoreState>((set) => ({
  unreadNotif: 0,
  loading: false,
  selectedNotif: undefined,
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
  markedAsRead: async (notifId) => {
    try {
      set({ loading: true });
      fetch(`${BASE_URL}notification/marked_read/${notifId}`, {
        method: "Patch",
      });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }

    set((state) => {
      const updatedNotif = state.notifications.map((notif) => {
        if (notif._id === notifId) {
          return { ...notif, read: true };
        } else {
          return notif;
        }
      });

      return { notifications: updatedNotif };
    });
  },
  setSelectedNotif: (notification) => {
    set({ selectedNotif: notification });
  },
  addUnreadNotif: () => {
    set((state) => {
      const updatedUnreadNotifCount = state.unreadNotif + 1;
      return { unreadNotif: updatedUnreadNotifCount };
    });
  },
  subtractUnreadNotif: () => {
    set((state) => {
      const updatedUnreadNotifCount = state.unreadNotif - 1;
      return { unreadNotif: updatedUnreadNotifCount };
    });
  },
  getUnreadNotifCount: async (deviceId) => {
    try {
      const res = await fetch(
        `${BASE_URL}notification/unread_count/${deviceId}`,
        {
          method: "Get",
        }
      );

      const data = await res.json();

      if (res.ok) {
        set({ unreadNotif: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
