const cursiveFont = { fontFamily: "'Instrument Serif', serif", fontStyle: "italic" };

export function LandingHero({ isSignedIn, isCheckingAuth, onGetStarted }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <div className="max-w-xl">
        <h1 className="text-[2.75rem] font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Talk in real time,
          <br />
          <span style={cursiveFont} className="font-normal text-[#8fa8ff]">
            effortlessly
          </span>
        </h1>

        <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/50">
          mesNex keeps every message instant and every conversation private.
        </p>

        <button
          type="button"
          onClick={onGetStarted}
          disabled={isCheckingAuth}
          className="mt-10 h-12 rounded-full bg-[#3d63dd] px-7 text-[14px] font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {isCheckingAuth ? "Loading" : isSignedIn ? "Go to chat" : "Get started"}
        </button>
      </div>
    </main>
  );
}