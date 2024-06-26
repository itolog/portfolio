import { hasTouchSupport } from "@/utils/bowser.ts";
import { EcctrlJoystick } from "ecctrl";

const Joystick = () => {
	if (!hasTouchSupport()) return null;
	return <EcctrlJoystick />;
};

export default Joystick;
