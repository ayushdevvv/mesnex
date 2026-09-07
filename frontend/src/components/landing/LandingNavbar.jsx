import { APP_NAME, AppLogo } from "../AppLogo";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
];

export function LandingNavbar({ isSignedIn, onGetStarted }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-[#060a14]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-12">
        <div className="flex items-center gap-2.5">
          <AppLogo size={32} className="rounded-[9px]" />
          <span className="text-[17px] font-semibold tracking-tight">{APP_NAME}</span>
        </div>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onGetStarted}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
        >
          {isSignedIn ? "Open chat" : "Sign in"}
        </button>
      </div>
    </header>
  );
}