import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const theme = createTheme({
  theme: "dark",
  settings: {
    background: "",
    foreground: "",
    gutterForeground: "#CBD5E1",
    gutterBackground: "transparent",
    gutterActiveForeground: "transparent",
    gutterBorder: "transparent",
    caret: "white",
    fontFamily: "JetBrains Mono",
  },
  styles: [{ tag: t.keyword, color: "#D946EF" }],
});
