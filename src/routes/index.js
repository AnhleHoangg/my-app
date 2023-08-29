import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Live from "~/pages/Live";
import config from "~/config";

// Public routes
const publicRoutes = [
  { path: config.Routes.home, component: Home },
  { path: config.Routes.following, component: Following },
  { path: config.Routes.profile, component: Profile },
  { path: config.Routes.upload, component: Upload },
  { path: config.Routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
