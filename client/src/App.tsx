import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateLinkPage from "./pages/CreateLinkPage";
import LinkPage from "./pages/LinkPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import PublicRoute from "./components/PublicRoute";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/new"
            element={
              <ProtectedRoute>
                <CreateLinkPage />
              </ProtectedRoute>
            }
          />
          <Route path="/id" element={<LinkPage />} />
          <Route
            path="/newProfile"
            element={
              <ProtectedRoute>
                <CreateProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
