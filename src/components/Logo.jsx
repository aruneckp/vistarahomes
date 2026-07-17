export default function Logo({ size = 22, color = "currentColor", className = "" }) {
  return (
    <svg
      className={`logo-mark ${className}`}
      width={size}
      height={size * (24 / 24)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="3" r="1.1" fill={color} />
      <polygon points="10,9.8 14,9.8 12,4.2" fill={color} />
      <polygon points="8,13.6 16,13.6 14,9.8 10,9.8" fill={color} />
      <polygon points="5.5,17.6 18.5,17.6 16,13.6 8,13.6" fill={color} />
      <polygon points="3,21.6 21,21.6 18.5,17.6 5.5,17.6" fill={color} />
      <rect x="1.5" y="21.6" width="21" height="1.6" rx="0.4" fill={color} />
    </svg>
  );
}
