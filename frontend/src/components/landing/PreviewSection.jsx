const cursiveFont = { fontFamily: "'Instrument Serif', serif", fontStyle: "italic" };

const SIDEBAR_ITEMS = [
  { name: "Sara Chen", msg: "perfect, can't wait", active: true },
  { name: "Dev Team", msg: "deployed to prod", active: false },
  { name: "Marcus Lee", msg: "sent a photo", active: false },
];

export function PreviewSection({ appName }) {
  return (
    <section id="preview" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:px-12">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        See{" "}
        <span style={cursiveFont} className="font-normal text-[#8fa8ff]">
          {appName}
        </span>{" "}
        in action
      </h2>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0b101c] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex h-100 sm:h-110">
          <div className="hidden w-56 shrink-0 border-r border-white/8 sm:block">
            <div className="border-b border-white/8 px-4 py-3.5">
              <div className="h-8 rounded-full bg-[#1c2740]" />
            </div>
            {SIDEBAR_ITEMS.map((item) => (
              <div key={item.name} className={`flex items-center gap-2.5 px-4 py-3 ${item.active ? "bg-[#141c30]" : ""}`}>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1c2740] text-[11px] font-medium">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">{item.name}</p>
                  <p className="truncate text-[11px] text-white/40">{item.msg}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2.5 border-b border-white/8 px-5 py-3.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#1c2740] text-[12px] font-medium">
                SC
              </div>
              <div>
                <p className="text-[13px] font-medium leading-tight">Sara Chen</p>
                <p className="text-[11px] text-[#5ee6a8]">Online</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-2 px-5 py-4">
              <div className="max-w-[60%] self-start rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-2 text-[13px] text-white/90">
                hey, are we still on for tonight?
              </div>
              <div className="max-w-[60%] self-end rounded-2xl rounded-br-md bg-[#3d63dd] px-3.5 py-2 text-[13px] text-white">
                yes, see you at 8
              </div>
              <div className="max-w-[60%] self-start rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-2 text-[13px] text-white/90">
                perfect, can't wait
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/8 px-5 py-3.5">
              <div className="h-8 flex-1 rounded-full bg-[#1c2740]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}