import { AuthActionPanel } from "../components/auth/AuthActionPanel";
import AuthHeader from "../components/auth/AuthHeader";
import { AuthHeroPanel } from "../components/auth/AuthHeroPanel";

function AuthPage() {
  return (
    <div className="min-h-dvh w-full bg-background text-foreground md:h-dvh md:overflow-hidden">
      <AuthHeader />

      <main className="relative flex min-h-[calc(100dvh-64px)] flex-col md:h-[calc(100dvh-64px)] md:flex-row">
        <AuthHeroPanel />
        <AuthActionPanel />
      </main>
    </div>
  );
}

export default AuthPage;