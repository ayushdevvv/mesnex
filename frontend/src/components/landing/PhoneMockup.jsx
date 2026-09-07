export function PhoneMockup() {
  return (
    <div className="flex justify-center md:justify-end">
      <style>{`
        @keyframes mn-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes mn-typing {
          0%, 8% { opacity: 0; }
          14%, 52% { opacity: 1; }
          58%, 100% { opacity: 0; }
        }
        @keyframes mn-reply {
          0%, 55% { opacity: 0; transform: translateY(6px); }
          65%, 100% { opacity: 1; transform: translateY(0px); }
        }
        .mn-phone { animation: mn-float 6s ease-in-out infinite; }
        .mn-typing { animation: mn-typing 7s ease-in-out infinite; }
        .mn-reply { animation: mn-reply 7s ease-in-out infinite; opacity: 0; }
      `}</style>

      <div className="mn-phone w-71 rounded-[2.5rem] border border-white/10 bg-[#0b101c] p-2.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
        <div className="overflow-hidden rounded-[2rem] bg-[#080c17]">
          <div className="flex items-center gap-2.5 border-b border-white/8 px-4 py-3.5">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#1c2740] text-sm font-medium text-white/80">
              SC
            </div>
            <div>
              <p className="text-[14px] font-medium leading-tight">Sara Chen</p>
              <p className="text-[11px] text-[#5ee6a8]">Online</p>
            </div>
          </div>

          <div className="flex min-h-84 flex-col justify-end gap-2 px-3.5 py-4">
            <div className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-2 text-[13px] leading-snug text-white/90">
              hey, are we still on for tonight?
            </div>

            <div className="max-w-[75%] self-end rounded-2xl rounded-br-md bg-[#3d63dd] px-3.5 py-2 text-[13px] leading-snug text-white">
              yes, see you at 8
            </div>

            <div className="relative h-9">
              <div className="mn-typing absolute left-0 flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-3">
                <span className="size-1.5 rounded-full bg-white/50" />
                <span className="size-1.5 rounded-full bg-white/50" />
                <span className="size-1.5 rounded-full bg-white/50" />
              </div>

              <div className="mn-reply absolute left-0 max-w-[85%] rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-2 text-[13px] leading-snug text-white/90">
                perfect, can't wait
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-white/8 px-3.5 py-3">
            <div className="h-8 flex-1 rounded-full bg-[#1c2740]" />
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3d63dd] text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 12L20 4L14 20L11 13L4 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}