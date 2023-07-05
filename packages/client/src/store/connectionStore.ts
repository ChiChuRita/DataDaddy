import create from "zustand";

interface ConnectionStore {
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
}

export const ConnectionStore = create<ConnectionStore>((set) => ({
  connected: false,
  connect: () => set(() => ({ connected: true })),
  disconnect: () => set(() => ({ connected: false })),
}));

//TODO: Use this store to manage persistent state
