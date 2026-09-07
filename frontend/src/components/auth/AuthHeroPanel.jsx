import { APP_NAME } from "../AppLogo";
import { AuthPreviewMockup } from "./AuthPreviewMockup";

export function AuthHeroPanel() {
  return (
    <section className="relative flex min-h-[min(420px,52vh)] shrink-0 flex-col justify-center overflow-hidden border-white/8 bg-[#05070c] px-8 py-10 md:min-h-0 md:w-[52%] md:border-r md:px-14 lg:w-[54%]">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]">
          Get your {APP_NAME} account ready
        </h1>
        <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-white/45">
          Sign in on the right to pick up right where you left off.
        </p>

        <div className="mt-9">
          <AuthPreviewMockup />
        </div>
      </div>
    </section>
  );
}