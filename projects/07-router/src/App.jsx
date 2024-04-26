import { lazy, Suspense } from "react";

import "./App.css";
import Page404 from "./pages/404.jsx";
import SearchPage from "./pages/Search.jsx";

import { Router } from "./components/Router.jsx";
import { Route } from "./components/Route.jsx";

const AboutPage = lazy(() => import("./pages/About.jsx"));
const HomePage = lazy(() => import("./pages/Home.jsx"))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
