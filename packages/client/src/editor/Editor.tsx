import CodeMirror from "@uiw/react-codemirror";

import { sql } from "@codemirror/lang-sql";
import { theme } from "./theme";

export const Editor = () => {
  return (
    <CodeMirror
      value="SELECT * FROM users"
      theme={theme}
      extensions={[sql()]}
      basicSetup={{
        foldGutter: false,
        highlightActiveLineGutter: false,
        highlightActiveLine: false,
      }}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};

export default Editor;
