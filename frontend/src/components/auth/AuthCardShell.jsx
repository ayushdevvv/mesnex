export function AuthCardShell({ children }) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-105">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
        <div className="px-8 pb-9 pt-10 text-white sm:px-10 sm:pb-10 sm:pt-11">{children}</div>
      </div>
    </div>
  );
}