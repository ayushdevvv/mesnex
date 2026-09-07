const FEATURES = [
  {
    title: "Real time",
    text: "Messages arrive the instant you send them, with live typing and read status.",
  },
  {
    title: "Private by default",
    text: "Every conversation is encrypted in transit, between you and only them.",
  },
  {
    title: "Built for speed",
    text: "A lightweight interface that stays fast on any device, every time.",
  },
];

export function FeatureStrip() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-10">
      <div className="grid grid-cols-1 gap-10 border-t border-white/8 py-16 sm:grid-cols-3 sm:gap-8">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <p className="text-[15px] font-medium">{feature.title}</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}