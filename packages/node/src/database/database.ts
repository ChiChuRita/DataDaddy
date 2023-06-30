import { Knex } from "knex";
import schemaInspector from "knex-schema-inspector";
import { SchemaInspector } from "knex-schema-inspector/dist/types/schema-inspector";

type DatabaseType = "mysql" | "sqlite" | "postges";

export interface DatabaseConnectionConnected {
  type: DatabaseType;
  connected: true;
  knex: Knex;
  meta: SchemaInspector;
}

export interface DatabaseConnectionDisconnected {
  type?: DatabaseType;
  connected: false;
  knex?: Knex;
  meta?: SchemaInspector;
}

export type DatabaseConnection =
  | DatabaseConnectionConnected
  | DatabaseConnectionDisconnected;

export let databaseConnection: DatabaseConnection = {
  connected: false,
};

export const connectDatabase = (type: DatabaseType, knex: Knex) => {
  databaseConnection = {
    type,
    connected: true,
    knex,
    meta: schemaInspector(knex),
  };
};

export const disconnectDatabase = () => {
  databaseConnection = {
    connected: false,
  };
};

export const useDatabase = () => {
  return databaseConnection;
};
