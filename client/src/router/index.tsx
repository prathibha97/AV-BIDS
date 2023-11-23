import { Fragment, Key, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EmptyLayout from "../layout/empty-layout";
import HomeLayout from "../layout/home-layout";

import SuspenseScreen from "./suspense-screen";

import RequireAuth from "../components/require-auth";
import HomeLayout2 from "../layout/home-layout-dash";
import Layout_02 from "../layout/layout_02";

function Router() {
  const routes: any = [
    {
      path: '/',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/home')) }],
    },
    {
      path: '/event-planner',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/event_planner')) }],
    },

    {
      path: '/16_saved_events',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events/saved-events')) }],
    },

    {
      path: '/av_providers',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/av_providers')) }],
    },
    {
      path: '/3_services',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/3_services')) }],
    },

    {
      path: '/4_event_categories',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/4_event_categories')) }],
    },

    {
      path: '/sign-up',
      layout: EmptyLayout,
      routes: [
        {
          element: lazy(() => import('../pages/auth/sign-up')),
        },
      ],
    },

    {
      path: '/8_about_us',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/8_about_us')) }],
    },

    {
      path: '/sign-in',
      layout: EmptyLayout,
      routes: [{ element: lazy(() => import('../pages/auth/sign-in')) }],
    },

    {
      path: '/7_contact_us',
      layout: HomeLayout,
      routes: [{ element: lazy(() => import('../pages/7_contact_us')) }],
    },

    // ----------------------Dashboard Routes Start here-----------------------------

    {
      path: '/dashboard',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/dashboard')) }],
    },

    {
      path: '/events',
      layout: HomeLayout,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events')) }],
    },
    {
      path: '/events/new',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events/new')) }],
    },
    {
      path: '/events/my-events',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events/my-events')) }],
    },
    {
      path: '/events/edit/:id',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events/edit')) }],
    },
    {
      path: '/events/:id',
      layout: Layout_02,
      guard: RequireAuth,
      routes: [
        { element: lazy(() => import('../pages/events/event-details')) },
      ],
    },
    {
      path: '/events/saved-events',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/events/saved-events')) }],
    },
    {
      path: '/messages',
      layout: HomeLayout2,
      guard: RequireAuth,
      routes: [{ element: lazy(() => import('../pages/messages')) }],
    },

    {
      path: '/15_dashboard',
      layout: HomeLayout2,
      routes: [{ element: lazy(() => import('../pages/15_dashboard')) }],
    },

    {
      path: '/17_billing',
      layout: HomeLayout2,
      routes: [{ element: lazy(() => import('../pages/17_billing')) }],
    },

    { path: '*', element: lazy(() => import('./404')) },
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

// {
//   path: '/events',
//   layout: HomeLayout,
//   guard: RequireAuth,
//   routes: [
//     { path: '', element: lazy(() => import('../pages/events')) },
//     { path: 'new', element: lazy(() => import('../pages/events/new')) },
//     {
//       path: 'my-events',
//       element: lazy(() => import('../pages/events/my-events')),
//     },
//     {
//       path: 'edit/:id',
//       element: lazy(() => import('../pages/events/edit')),
//     },
//   ],
// },
