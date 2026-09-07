import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { io } from "socket.io-client";
import toast from "react-hot-toast";

const SOCKET_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : import.meta.env.VITE_API_URL;

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket(res.data);
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      set({ authUser: res.data });
      get().connectSocket(res.data);
      toast.success("Account created");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      return false;
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      set({ authUser: res.data });
      get().connectSocket(res.data);
      toast.success("Welcome back");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  googleLogin: async (credential) => {
    try {
      const res = await axiosInstance.post("/auth/google", { credential });
      set({ authUser: res.data });
      get().connectSocket(res.data);
      toast.success("Welcome");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Google sign in failed");
      return false;
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      get().disconnectSocket();
      toast.success("Logged out");
    } catch (error) {
      toast.error("Logout failed");
    }
  },

  connectSocket: (user) => {
    if (!user || get().socket?.connected) return;

    const socket = io(SOCKET_URL, { query: { userId: user._id } });
    set({ socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    const socket = get().socket;
    if (socket?.connected) socket.disconnect();
    set({ socket: null });
  },
}));