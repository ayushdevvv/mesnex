import { APP_NAME } from "../AppLogo";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-[13px] text-white/40 sm:flex-row sm:px-10">
        <p>© 2026 {APP_NAME}</p>
        <div className="flex items-center gap-5">
          <a href="https://twitter.com/ayushxdevz" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            Twitter
          </a>
          <a href="https://github.com/ayushdevvv/mesnex" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}