import { create } from "zustand";

type DatabaseType = "postgres" | "mysql" | "sqlite";

interface ConnectionConnected {
  connected: true;
  databaseType: DatabaseType;
}

interface ConnectionDisconnected {
  connected: false;
  databaseType: null;
}

type Connection = ConnectionConnected | ConnectionDisconnected;

interface ConnectionStore {
  connection: Connection;
  connect: (database: DatabaseType) => void;
  disconnect: () => void;
}

export const ConnectionStore = create<ConnectionStore>((set) => ({
  connection: { connected: false, databaseType: null },
  connect: (database: DatabaseType) =>
    set(() => ({ connection: { connected: true, databaseType: database } })),
  disconnect: () =>
    set(() => ({ connection: { connected: false, databaseType: null } })),
}));

//TODO: Use this store to manage persistent state
