import { APP_NAME, AppLogo } from "../AppLogo";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
];

export function LandingNavbar({ isSignedIn, onGetStarted }) {
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-white/8 bg-[#05070c] px-6 py-5 sm:px-10">
      <div className="flex items-center gap-2.5">
        <AppLogo size={30} className="rounded-[8px]" />
        <span className="text-[16px] font-semibold tracking-tight">{APP_NAME}</span>
      </div>

      <nav className="hidden items-center gap-9 sm:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-[13px] text-white/50 transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={onGetStarted}
        className="rounded-full border border-white/15 px-4 py-1.5 text-[13px] font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
      >
        {isSignedIn ? "Open chat" : "Sign in"}
      </button>
    </header>
  );
}