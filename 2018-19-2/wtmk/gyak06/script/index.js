import { drawerElement } from "./drawer";
import { navigate, Pages, initNavigation } from "./navigation";

initNavigation(drawerElement);
navigate(Pages.CAMERA);
