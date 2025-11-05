import { io } from "socket.io-client";
import { BASE_URL } from "../constants/BASE_URL";
const socket = io(BASE_URL, {
  transports: ["websocket"], // improves compatibility
});

export default socket;
