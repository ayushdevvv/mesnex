import { Navigate, Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import AuthPage from "../pages/AuthPage";
import ChatPage from "../pages/ChatPage";
import PageLoader from "../components/PageLoader";
import { useAuthStore } from "../store/useAuthStore";

function AppRoutes() {
  const authUser = useAuthStore((state) => state.authUser);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/auth"
        element={
          isCheckingAuth ? <PageLoader /> : authUser ? <Navigate to="/chat" replace /> : <AuthPage />
        }
      />

      <Route
        path="/chat"
        element={
          isCheckingAuth ? <PageLoader /> : !authUser ? <Navigate to="/auth" replace /> : <ChatPage />
        }
      />
    </Routes>
  );
}

export default AppRoutes;