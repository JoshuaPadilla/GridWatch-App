import { ImageSourcePropType } from "react-native";
import current_icon from "../../assets/icons/current_icon.png";
import grid_status from "../../assets/icons/grid_status.png";
import history_icon from "../../assets/icons/history_icon.png";
import history_status_outage from "../../assets/icons/history_status_outage.png";
import history_status_restored from "../../assets/icons/history_status_restored.png";
import history_status_warning from "../../assets/icons/history_status_warning.png";
import home_icon from "../../assets/icons/home_icon.png";
import location_icon from "../../assets/icons/location_icon.png";
import notif_icon from "../../assets/icons/notif_icon.png";
import status_danger from "../../assets/icons/status_danger.png";
import status_good from "../../assets/icons/status_good.png";
import status_warning from "../../assets/icons/status_warning.png";
import voltage_icon from "../../assets/icons/voltage_icon.png";

interface IconsState {
  history_icon: ImageSourcePropType;
  home_icon: ImageSourcePropType;
  location_icon: ImageSourcePropType;
  notif_icon: ImageSourcePropType;
  status_good: ImageSourcePropType;
  status_danger: ImageSourcePropType;
  status_warning: ImageSourcePropType;
  grid_status: ImageSourcePropType;
  voltage_icon: ImageSourcePropType;
  current_icon: ImageSourcePropType;
  history_status_outage: ImageSourcePropType;
  history_status_restored: ImageSourcePropType;
  history_status_warning: ImageSourcePropType;
}

export const Icons: IconsState = {
  history_icon,
  home_icon,
  location_icon,
  notif_icon,
  status_good,
  status_danger,
  status_warning,
  grid_status,
  voltage_icon,
  current_icon,
  history_status_outage,
  history_status_restored,
  history_status_warning,
};
