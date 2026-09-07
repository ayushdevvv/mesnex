const cursiveFont = { fontFamily: "'Instrument Serif', serif", fontStyle: "italic" };

const ROWS = [
  {
    title: "Real time delivery",
    text: "Messages reach the other person the instant you hit send, with live typing and read status so you always know where a conversation stands.",
    reversed: false,
    preview: (
      <div className="rounded-2xl border border-white/8 bg-[#0b101c] p-5">
        <div className="flex items-center justify-between text-[12px] text-white/40">
          <span>You</span>
          <span>Delivered</span>
        </div>
        <div className="mt-3 flex justify-end">
          <div className="rounded-2xl rounded-br-md bg-[#3d63dd] px-3.5 py-2 text-[13px] text-white">
            on my way now
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Private by default",
    text: "Every conversation is encrypted in transit, so your messages stay between you and the person you sent them to.",
    reversed: true,
    preview: (
      <div className="rounded-2xl border border-white/8 bg-[#0b101c] p-5">
        <div className="flex items-center gap-2 text-[12px] text-[#8fa8ff]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Private by default
        </div>
        <div className="mt-3 rounded-2xl rounded-bl-md bg-[#1c2740] px-3.5 py-2 text-[13px] text-white/90">
          only you and Sara can read this
        </div>
      </div>
    ),
  },
  {
    title: "Built for speed",
    text: "A lightweight interface that opens fast and stays fast, on any device, so nothing gets between you and the conversation.",
    reversed: false,
    preview: (
      <div className="rounded-2xl border border-white/8 bg-[#0b101c] p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#1c2740] text-xs font-medium">
            JD
          </div>
          <div className="h-2 flex-1 rounded-full bg-white/8">
            <div className="h-2 w-4/5 rounded-full bg-[#3d63dd]" />
          </div>
        </div>
        <p className="mt-3 text-[12px] text-white/40">Loaded in under a second</p>
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-12">
      <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
        Everything feels{" "}
        <span style={cursiveFont} className="font-normal text-[#8fa8ff]">
          effortless
        </span>
      </h2>

      <div className="mt-14 space-y-16">
        {ROWS.map((row) => (
          <div key={row.title} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
            <div className={row.reversed ? "order-2 md:order-1" : ""}>{row.preview}</div>
            <div className={row.reversed ? "order-1 md:order-2" : ""}>
              <p className="text-lg font-medium">{row.title}</p>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/55">{row.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}