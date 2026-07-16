export default function Spark({ size = 16, color = "currentColor", className = "" }) {
  return (
    <svg
      className={`spark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 1 L14.1 9.9 L23 12 L14.1 14.1 L12 23 L9.9 14.1 L1 12 L9.9 9.9 Z"
        fill={color}
      />
    </svg>
  );
}
