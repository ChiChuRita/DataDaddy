import CodeMirror from "@uiw/react-codemirror";

import { MySQL, PostgreSQL, SQLite, sql } from "@codemirror/lang-sql";
import { theme } from "./theme";
import { DatabaseType } from "../store/connectionStore";

interface EditorProps {
  database: DatabaseType;
}

const databaseMap = (database: DatabaseType) => {
  switch (database) {
    case "mysql":
      return MySQL;
    case "postgres":
      return PostgreSQL;
    case "sqlite":
      return SQLite;
    default:
      return MySQL;
  }
};

export const Editor: React.FC<EditorProps> = ({ database }) => {
  return (
    <CodeMirror
      value="SELECT * FROM users"
      theme={theme}
      extensions={[sql({ dialect: databaseMap(database) })]}
      basicSetup={{
        foldGutter: false,
        highlightActiveLineGutter: false,
        highlightActiveLine: false,
        drawSelection: false,
      }}
    />
  );
};

export default Editor;
