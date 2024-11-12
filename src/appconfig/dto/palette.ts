export interface IPalette {
  mode: string;
  common: {
    black: string;
    white: string;
  };
  primary: ColorObject;
  secondary: ColorObject;
  error: ColorObject;
  warning: ColorObject;
  info: ColorObject;
  success: ColorObject;
  grey: GreyObject;
  contrastThreshold: number;
  text: TextObject;
  background: BackgroundObject;
  action: ActionObject;
}

interface ColorObject {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

interface GreyObject {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

interface TextObject {
  primary: string;
  secondary: string;
  disabled: string;
  divider: string;
}

interface BackgroundObject {
  paper: string;
  default: string;
}

interface ActionObject {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledBackground: string;
  disabledOpacity: number;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}
