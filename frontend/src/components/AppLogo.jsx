export const APP_NAME = "mesNex";

export function AppLogo({ className = "", size = 32, alt = APP_NAME }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="mn-logo-main" x1="10" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ea8fe" />
            <stop offset="45%" stopColor="#2f5fd6" />
            <stop offset="100%" stopColor="#0b1f4d" />
          </linearGradient>
          <linearGradient id="mn-logo-fold" x1="35" y1="45" x2="65" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a9c9ff" />
            <stop offset="100%" stopColor="#4f7fe8" />
          </linearGradient>
        </defs>

        <path
          d="M22 26 L22 74 L34 66 L34 44 L48 62 L62 44 L62 66 L74 74 L74 26 L60 34 L60 30 L50 44 L40 30 L40 34 Z"
          fill="url(#mn-logo-main)"
        />
        <path d="M34 44 L48 62 L58 50 L44 33 Z" fill="url(#mn-logo-fold)" opacity="0.85" />
      </svg>
    </div>
  );
}