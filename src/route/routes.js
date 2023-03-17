import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import TestCases from "../pages/TestCases";
export const routes = [
  {
    key:'home',
    path: "/dashboard",
    Component: HomePage,
    role:["user","admin"]
  },
  {
    key:'about',
    path: "/about",
    Component: AboutPage,
    role:["user","admin"]
  },
  {
    key:'contact',
    path: "/contact",
    Component: ContactPage,
    role:["admin"]
  },
  {
    key:'testCases',
    path: "/test-cases",
    Component: TestCases,
    role:["admin","user"]
  },
  {
    key:'notFound',
    path: "*",
    Component: NotFound,
    role:["admin","user"]
  },
];
