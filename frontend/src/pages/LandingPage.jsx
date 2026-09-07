import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { APP_NAME } from "../components/AppLogo";
import { LandingNavbar } from "../components/landing/LandingNavbar";
import { LandingHero } from "../components/landing/LandingHero";
import { FeaturesSection } from "../components/landing/FeaturesSection";
import { PreviewSection } from "../components/landing/PreviewSection";

function LandingPage() {
  const authUser = useAuthStore((state) => state.authUser);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isCheckingAuth) return;
    navigate(authUser ? "/chat" : "/auth");
  };

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#060a14] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#3d63dd]/20 blur-[140px]"
      />

      <LandingNavbar isSignedIn={Boolean(authUser)} onGetStarted={handleGetStarted} />

      <LandingHero
        appName={APP_NAME}
        isSignedIn={Boolean(authUser)}
        isCheckingAuth={isCheckingAuth}
        onGetStarted={handleGetStarted}
      />

      <FeaturesSection />

      <PreviewSection appName={APP_NAME} />
    </div>
  );
}

export default LandingPage;