import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { APP_NAME } from "../components/AppLogo";
import { LandingNavbar } from "../components/landing/LandingNavbar";
import { LandingHero } from "../components/landing/LandingHero";
import { DesktopPreview } from "../components/landing/DesktopPreview";
import { FeatureStrip } from "../components/landing/FeatureStrip";
import { LandingFooter } from "../components/landing/LandingFooter";

function LandingPage() {
  const authUser = useAuthStore((state) => state.authUser);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isCheckingAuth) return;
    navigate(authUser ? "/chat" : "/auth");
  };

  return (
    <div className="min-h-dvh w-full bg-[#05070c] text-white">
      <LandingNavbar isSignedIn={Boolean(authUser)} onGetStarted={handleGetStarted} />

      <LandingHero
        isSignedIn={Boolean(authUser)}
        isCheckingAuth={isCheckingAuth}
        onGetStarted={handleGetStarted}
      />

      <DesktopPreview appName={APP_NAME} />

      <FeatureStrip />

      <LandingFooter />
    </div>
  );
}

export default LandingPage;