import "@emotion/react";
import { ThemeType } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

declare module "fonts" {
  declare module "*.woff";
  declare module "*.woff2";
}
