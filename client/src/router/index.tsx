import { Fragment, Key, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EmptyLayout from "../layout/empty-layout";
import EmptyLayout2 from "../layout/empty-layout2";
import HomeLayout from "../layout/home-layout";

import SuspenseScreen from "./suspense-screen";

import RequireAuth from "../components/require-auth";
import HomeLayout2 from "../layout/home-layout-dash";
import Layout_02 from "../layout/layout_02";
import PlannerAndAuthWrapper from "./guards/PlannerAndAuthWrapper";
import SubscriptionAndAuthWrapper from "./guards/SubscriptionAndAuthWrapper";

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
      path: "/sign-up",
      layout: EmptyLayout,
      routes: [
        {
          element: lazy(() => import("../pages/auth/sign-up")),
        },
      ],
    },

    {
      path: "/8_about_us",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/8_about_us")) }],
    },

    {
      path: "/sign-in",
      layout: EmptyLayout,
      routes: [{ element: lazy(() => import("../pages/auth/sign-in")) }],
    },

    {
      path: "/contact-us",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/contact-us")) }],
    },

    // ----------------------Dashboard Routes Start here-----------------------------

    {
      path: "/dashboard",
      layout: HomeLayout2,
      guard: SubscriptionAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/dashboard")) }],
    },

    {
      path: "/events",
      layout: HomeLayout,
      // guard: SubscriptionAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events")) }],
    },
    {
      path: "/events/new",
      layout: HomeLayout2,
      guard: PlannerAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events/new")) }],
    },
    {
      path: "/events/my-events",
      layout: HomeLayout2,
      guard: PlannerAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events/my-events")) }],
    },
    {
      path: "/events/edit/:id",
      layout: HomeLayout2,
      guard: PlannerAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events/edit")) }],
    },
    {
      path: "/events/:id",
      layout: Layout_02,
      // guard: RequireAuth,
      routes: [
        { element: lazy(() => import("../pages/events/event-details")) },
      ],
    },
    {
      path: "/events/saved-events",
      layout: HomeLayout2,
      guard: SubscriptionAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events/saved-events")) }],
    },
    {
      path: "/events/alerts",
      layout: HomeLayout2,
      guard: SubscriptionAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/events/event-alerts")) }],
    },
    {
      path: "/messages",
      layout: HomeLayout2,
      guard: SubscriptionAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/messages")) }],
    },

    {
      path: "/billing",
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import("../pages/billing")) }],
    },

    {
      path: "/18_order_page",
      layout: EmptyLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import("../pages/18_order_page")) }],
    },

    {
      path: "/19_add_card",
      layout: EmptyLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import("../pages/19_add_card")) }],
    },

    {
      path: "/20_place_order",
      layout: EmptyLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import("../pages/20_place_order")) }],
    },

    {
      path: "/proposals",
      layout: HomeLayout2,
      guard: PlannerAndAuthWrapper,
      routes: [{ element: lazy(() => import("../pages/proposals")) }],
    },

    {
      path: "/messages-mobile",
      layout: HomeLayout2,
      guard: SubscriptionAndAuthWrapper,
      routes: [
        {
          element: lazy(
            () => import("../pages/messages/components/messages-mobile")
          ),
        },
      ],
    },

    {
      path: "/21_billing_new",
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import("../pages/21_billing_new")) }],
    },

    {
      path: "/forgot_password",
      layout: EmptyLayout,

      routes: [{ element: lazy(() => import("../pages/forgot_password")) }],
    },

    { path: "*", element: lazy(() => import("./404")) },
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
    const Layout = route.layout ? route.layout : Fragment;
    const isIndex: boolean = route.path ? false : true;
    let props: any = {};
    if (isIndex) {
      props["index"] = true;
    } else {
      props["path"] = route.path;
    }

    // Check if the route has a guard and apply it
    const Guard = route.guard || Fragment;

    return (
      <Route
        key={i}
        {...props}
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
