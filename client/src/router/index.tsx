import { Fragment, Key, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EmptyLayout from "../layout/empty-layout";
import HomeLayout from "../layout/home-layout";
import { AuthGuard, ReversGuard } from "./guards";

import SuspenseScreen from "./suspense-screen";
// import AuthLayout from "../layout/auth-layout";
// import useAuth from "../utils/context/auth-context";

function Router() {
  const routes: any = [
    {
      path: "/",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/home")) }],
    },
    {
      path: "/event-planner",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/event_planner")) }],
    },
    {
      path: "/av_providers",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/av_providers")) }],
    },
    {
      path: "/3_services",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/3_services")) }],
    },

    {
      path: "/4_event_categories",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/4_event_categories")) }],
    },

    {
      path: "/5_01_create_event_planner",
      layout: EmptyLayout,
      routes: [
        { element: lazy(() => import("../pages/5_01_create_event_planner")) },
      ],
    },

    {
      path: "/8_about_us",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/8_about_us")) }],
    },

    {
      path: "/6_existing_user",
      layout: EmptyLayout,
      routes: [{ element: lazy(() => import("../pages/6_existing_user")) }],
    },

    {
      path: "/7_contact_us",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/7_contact_us")) }],
    },

    {
      path: "/09_events",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/09_events")) }],
    },

    {
      path: "/10_event_details_page",
      layout: HomeLayout,
      routes: [
        { element: lazy(() => import("../pages/10_event_details_page")) },
      ],
    },

    { path: "*", element: lazy(() => import("./404")) },

    // {
    //   path: "/lesson",
    //   layout: HomeLayout,
    //   guard: AuthGuard,
    //   routes: [
    //     {
    //       path: ":lid",
    //       element: lazy(() => import("../pages/courses/lesson/index")),
    //     },
    //     { element: lazy(() => import("../pages/courses")) },
    //   ],
    // },

    // {
    //   path: "/auth",
    //   layout: AuthLayout,
    //   // guard: ReversGuard,
    //   routes: [
    //     {
    //       path: "forget-password",
    //       element: lazy(() => import("../pages/auth/forget-password")),
    //     },
    //     { path: "login", element: lazy(() => import("../pages/auth/login")) },
    //     {
    //       path: "register",
    //       element: lazy(() => import("../pages/auth/register")),
    //     },
    //     { element: lazy(() => import("../pages/tutors")) },
    //   ],
    // },
  ];

  const routeRender = (
    route: {
      element: any;
      guard: any;
      layout: any;
      path: string;
      routes: any[];
    },
    i: Key | null | undefined
  ) => {
    const Element = route.element ? route.element : Fragment;
    const Guard = route.guard ? route.guard : Fragment;
    const Layout = route.layout ? route.layout : Fragment;
    const isIndex: boolean = route.path ? false : true;
    let props: any = {};
    if (isIndex) {
      props["index"] = true;
    } else {
      props["path"] = route.path;
    }
    return (
      <Route
        key={i}
        {...props}
        // // index={isIndex}
        // path={route.path}
        element={
          <Guard>
            <Layout>
              <Suspense fallback={<SuspenseScreen />}>
                <Element />
              </Suspense>
            </Layout>
          </Guard>
        }
      >
        {route.routes && route.routes.map(routeRender)}
      </Route>
    );
  };
  return <Routes>{routes.map(routeRender)}</Routes>;
}

export default Router;
