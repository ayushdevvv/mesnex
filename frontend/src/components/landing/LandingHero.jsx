import { PhoneMockup } from "./PhoneMockup";

const cursiveFont = { fontFamily: "'Instrument Serif', serif", fontStyle: "italic" };

export function LandingHero({ appName, isSignedIn, isCheckingAuth, onGetStarted }) {
  return (
    <main className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 sm:px-12 md:grid-cols-2 md:py-24">
      <div className="max-w-md">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Say it the moment you think it,{" "}
          <span style={cursiveFont} className="font-normal text-[#8fa8ff]">
            instantly
          </span>
        </h1>

        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55">
          {appName} delivers your messages the second you send them, keeps every conversation
          private, and stays out of your way.
        </p>

        <button
          type="button"
          onClick={onGetStarted}
          disabled={isCheckingAuth}
          className="mt-9 h-13 rounded-2xl bg-[#3d63dd] px-8 text-[15px] font-semibold text-white shadow-[0_18px_45px_-15px_rgba(61,99,221,0.7)] transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {isCheckingAuth ? "Loading" : isSignedIn ? "Go to chat" : "Get started"}
        </button>
      </div>

      <PhoneMockup />
    </main>
  );
}