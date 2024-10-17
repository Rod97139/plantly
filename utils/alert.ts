import { Alert, Platform } from "react-native";

type AlertOption = {
  text: string;
  onPress?: () => void;
  style?: "default" | "cancel" | "destructive";
};

const alertPolyfill = (
  title: string,
  description?: string,
  options?: AlertOption[],
  extra?: any,
): void => {
  window.alert([title, description].filter(Boolean).join("\n"));
  // const result = window.confirm([title, description].filter(Boolean).join("\n"));

  // if (result) {
  //     const confirmOption = options?.find(({ style }) => style !== 'cancel')
  //     confirmOption && confirmOption.onPress()
  // } else {
  //     const cancelOption = options?.find(({ style }) => style === 'cancel')
  //     cancelOption && cancelOption.onPress()
  // }
};

const alert = Platform.OS === "web" ? alertPolyfill : Alert.alert;

export default alert;
