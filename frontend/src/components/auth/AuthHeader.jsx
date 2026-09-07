import { APP_NAME, AppLogo } from "../AppLogo";
import { ThemePresetPicker } from "../ThemePresetPicker";

function AuthHeader() {
  return (
    <header className="flex w-full shrink-0 items-center justify-between border-b border-white/8 bg-[#05070c] px-6 py-4 sm:px-10">
      <div className="flex items-center gap-2.5">
        <AppLogo size={30} className="rounded-[8px]" alt="" />
        <span className="text-[16px] font-semibold tracking-tight text-white">{APP_NAME}</span>
      </div>

      <div className="flex shrink-0 items-center gap-0.5">
        <ThemePresetPicker />
      </div>
    </header>
  );
}
export default AuthHeader;