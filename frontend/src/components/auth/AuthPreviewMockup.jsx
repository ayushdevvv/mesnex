export function AuthPreviewMockup() {
  return (
    <div className="relative w-full max-w-md">
      <style>{`
        @keyframes mn-auth-signin {
          0%, 42% { opacity: 1; transform: translateY(0px); }
          50%, 100% { opacity: 0; transform: translateY(-6px); }
        }
        @keyframes mn-auth-chat {
          0%, 42% { opacity: 0; transform: translateY(6px); }
          50%, 92% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        .mn-auth-signin { animation: mn-auth-signin 9s ease-in-out infinite; }
        .mn-auth-chat { animation: mn-auth-chat 9s ease-in-out infinite; }
      `}</style>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>

        <div className="relative h-80">
          {/* sign in state */}
          <div className="mn-auth-signin absolute inset-0 flex flex-col items-center justify-center gap-4 px-10">
            <div className="flex size-11 items-center justify-center rounded-xl bg-[#151c2c] text-[15px] font-medium text-[#8fa8ff]">
              mN
            </div>
            <div className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.02]" />
            <div className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.02]" />
            <div className="h-10 w-full rounded-full bg-[#3d63dd]" />
          </div>

          {/* chat state */}
          <div className="mn-auth-chat absolute inset-0 flex flex-col">
            <div className="flex items-center gap-2.5 border-b border-white/8 px-5 py-3.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#151c2c] text-[11px] font-medium">
                SC
              </div>
              <div>
                <p className="text-[12.5px] font-medium leading-tight">Sara Chen</p>
                <p className="text-[10.5px] text-[#5ee6a8]">Online</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-2 px-5 py-4">
              <div className="max-w-[65%] self-start rounded-2xl rounded-bl-md bg-[#151c2c] px-3.5 py-2 text-[12.5px] text-white/85">
                you're in
              </div>
              <div className="max-w-[65%] self-end rounded-2xl rounded-br-md bg-[#3d63dd] px-3.5 py-2 text-[12.5px] text-white">
                let's talk
              </div>
            </div>

            <div className="border-t border-white/8 px-5 py-3.5">
              <div className="h-8 rounded-full border border-white/10 bg-white/[0.02]" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-[13px] text-white/35">one account, every conversation</p>
    </div>
  );
}