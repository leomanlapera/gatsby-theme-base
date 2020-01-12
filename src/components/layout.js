/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import { Global } from "@emotion/core";
import theme from "../theme";
import normalize from "./normalize";

export default props => (
  <ThemeProvider theme={theme}>
    <Global styles={normalize} />
    {props.children}
  </ThemeProvider>
);
