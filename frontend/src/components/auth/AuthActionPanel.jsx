import { useState } from "react";
import { Button } from "@heroui/react";
import { GoogleLogin } from "@react-oauth/google";
import { ArrowRightIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { AppLogo } from "../AppLogo";
import { AuthCardShell } from "./AuthCardShell";
import { useAuthStore } from "../../store/useAuthStore";

const logoTileClassName = [
  "relative rounded-2xl bg-linear-to-b from-white to-[#f2f2f7] p-2",
  "shadow-lg shadow-black/8 ring-1 ring-black/8",
  "dark:from-[#2c2c2e] dark:to-[#1a1a1c] dark:shadow-black/50 dark:ring-white/12",
].join(" ");

const continueButtonClassName = [
  "group relative h-13 overflow-hidden rounded-2xl text-[15px] font-semibold",
  "shadow-xl shadow-accent/45 dark:shadow-accent/35",
].join(" ");

const inputClassName =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-accent/40 focus:ring-2 dark:border-white/12 dark:bg-[#1c1c1e] dark:text-white";

export function AuthActionPanel() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const signup = useAuthStore((state) => state.signup);
  const googleLogin = useAuthStore((state) => state.googleLogin);
  const isLoggingIn = useAuthStore((state) => state.isLoggingIn);
  const isSigningUp = useAuthStore((state) => state.isSigningUp);

  const [mode, setMode] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSubmitting = isLoggingIn || isSigningUp;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const didSucceed =
      mode === "login" ? await login({ email, password }) : await signup({ fullName, email, password });

    if (didSucceed) navigate("/chat");
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const didSucceed = await googleLogin(credentialResponse.credential);
    if (didSucceed) navigate("/chat");
  };

  return (
    <section className="relative flex flex-1 flex-col items-stretch justify-center overflow-hidden px-5 py-12 sm:px-10 md:px-14 md:py-10 lg:px-16">
      <AuthCardShell>
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div
              aria-hidden
              className="absolute -inset-3.5 rounded-[20px] bg-linear-to-br from-accent/22 via-accent/8 to-transparent opacity-90 blur-xl dark:from-accent/28 dark:via-accent/10"
            />
            <div className={logoTileClassName}>
              <AppLogo size={52} className="rounded-xl" alt="" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-accent">
            <SparklesIcon className="size-3.5" strokeWidth={2} aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Secure entry
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" ? (
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              className={inputClassName}
            />
          ) : null}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className={inputClassName}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={6}
            className={inputClassName}
          />

          <Button
            type="submit"
            fullWidth
            size="lg"
            variant="primary"
            isDisabled={isSubmitting}
            className={continueButtonClassName}
          >
            <span className="relative z-1 flex items-center justify-center gap-2">
              {isSubmitting ? "Please wait" : mode === "login" ? "Sign in" : "Create account"}
              <ArrowRightIcon className="size-4" aria-hidden />
            </span>
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-wide text-[#8E8E93] dark:text-[#636366]">
          <span className="h-px flex-1 bg-black/8 dark:bg-white/10" />
          or
          <span className="h-px flex-1 bg-black/8 dark:bg-white/10" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => {}} />
        </div>

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-6 w-full text-center text-[13px] font-medium text-accent"
        >
          {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-black/6 pt-6 text-[11px] text-[#8E8E93] dark:border-white/8 dark:text-[#636366]">
          <ShieldCheckIcon
            className="size-3.5 shrink-0 text-[#34C759] dark:text-[#30D158]"
            strokeWidth={2}
            aria-hidden
          />
          <span>Protected session, encrypted in transit</span>
        </div>
      </AuthCardShell>
    </section>
  );
}