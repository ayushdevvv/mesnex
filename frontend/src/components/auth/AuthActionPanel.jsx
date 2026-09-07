import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { AuthCardShell } from "./AuthCardShell";
import { useAuthStore } from "../../store/useAuthStore";

const inputClassName =
  "w-full rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#3d63dd]/60";

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
    <section className="relative flex flex-1 flex-col items-stretch justify-center bg-[#05070c] px-5 py-12 sm:px-10 md:px-14 lg:px-16">
      <AuthCardShell>
        <p className="mb-7 text-[15px] font-medium text-white">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </p>

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

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#3d63dd] text-[14px] font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {isSubmitting ? "Please wait" : mode === "login" ? "Sign in" : "Create account"}
           
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-wide text-white/25">
          <span className="h-px flex-1 bg-white/8" />
          or
          <span className="h-px flex-1 bg-white/8" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => {}} theme="filled_black" />
        </div>

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-7 w-full text-center text-[13px] font-medium text-[#8fa8ff]"
        >
          {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
        </button>
      </AuthCardShell>
    </section>
  );
}