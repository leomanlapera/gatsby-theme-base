/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../theme";

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
