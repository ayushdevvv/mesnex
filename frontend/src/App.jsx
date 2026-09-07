import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { useAuthStore } from "./store/useAuthStore";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <ThemeProvider>
      <AppRoutes />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;