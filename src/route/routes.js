import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
export const routes = [
  {
    key:'home',
    path: "/dashboard",
    Component: HomePage,
  },
  {
    key:'about',
    path: "/about",
    Component: AboutPage,
  },
  {
    key:'contact',
    path: "/contact",
    Component: ContactPage,
  },
];
