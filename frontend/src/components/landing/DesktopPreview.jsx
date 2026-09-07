const SIDEBAR_ITEMS = [
  { name: "Sara Chen", msg: "perfect, can't wait", active: true },
  { name: "Dev Team", msg: "deployed to prod", active: false },
  { name: "Marcus Lee", msg: "sent a photo", active: false },
];

export function DesktopPreview({ appName }) {
  return (
    <section id="preview" className="mx-auto w-full max-w-6xl px-6 pb-28 sm:px-10">
      <style>{`
        @keyframes mn-typing {
          0%, 8% { opacity: 0; }
          14%, 52% { opacity: 1; }
          58%, 100% { opacity: 0; }
        }
        @keyframes mn-reply {
          0%, 55% { opacity: 0; transform: translateY(6px); }
          65%, 100% { opacity: 1; transform: translateY(0px); }
        }
        .mn-typing { animation: mn-typing 7s ease-in-out infinite; }
        .mn-reply { animation: mn-reply 7s ease-in-out infinite; opacity: 0; }
      `}</style>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b12]">
        <div className="flex h-115 sm:h-130">
          <div className="hidden w-64 shrink-0 border-r border-white/8 sm:block">
            <div className="flex items-center gap-2.5 border-b border-white/8 px-5 py-4">
              <div className="h-8 flex-1 rounded-full border border-white/10 bg-white/[0.02]" />
            </div>
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 border-b border-white/5 px-5 py-3.5 ${
                  item.active ? "bg-white/[0.04]" : ""
                }`}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#151c2c] text-[11px] font-medium text-white/70">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">{item.name}</p>
                  <p className="truncate text-[11px] text-white/35">{item.msg}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-3 border-b border-white/8 px-6 py-4">
              <div className="flex size-9 items-center justify-center rounded-full bg-[#151c2c] text-[12px] font-medium">
                SC
              </div>
              <div>
                <p className="text-[13px] font-medium leading-tight">Sara Chen</p>
                <p className="text-[11px] text-[#5ee6a8]">Online</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-2.5 px-6 py-6">
              <div className="max-w-[55%] self-start rounded-2xl rounded-bl-md bg-[#151c2c] px-4 py-2.5 text-[13px] text-white/85">
                hey, are we still on for tonight?
              </div>
              <div className="max-w-[55%] self-end rounded-2xl rounded-br-md bg-[#3d63dd] px-4 py-2.5 text-[13px] text-white">
                yes, see you at 8
              </div>

              <div className="relative h-10">
                <div className="mn-typing absolute left-0 flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#151c2c] px-4 py-3.5">
                  <span className="size-1.5 rounded-full bg-white/50" />
                  <span className="size-1.5 rounded-full bg-white/50" />
                  <span className="size-1.5 rounded-full bg-white/50" />
                </div>

                <div className="mn-reply absolute left-0 max-w-[75%] rounded-2xl rounded-bl-md bg-[#151c2c] px-4 py-2.5 text-[13px] text-white/85">
                  perfect, can't wait
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 px-6 py-4">
              <div className="h-10 rounded-full border border-white/10 bg-white/[0.02]" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-[13px] text-white/35">{appName}, exactly as it looks</p>
    </section>
  );
}