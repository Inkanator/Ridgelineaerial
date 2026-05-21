interface DroneLogoProps {
  className?: string
  size?: number
  showMountains?: boolean
}

export default function DroneLogo({
  className = '',
  size = 48,
  showMountains = true,
}: DroneLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ridgeline Aerial drone logo"
    >
      {/* Drone arms */}
      <line x1="50" y1="44" x2="22" y2="28" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="44" x2="78" y2="28" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="56" x2="22" y2="72" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="56" x2="78" y2="72" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" />

      {/* Rotors (ellipses) */}
      <ellipse cx="22" cy="25" rx="13" ry="5" fill="#c9a84c" opacity="0.85" />
      <ellipse cx="78" cy="25" rx="13" ry="5" fill="#c9a84c" opacity="0.85" />
      <ellipse cx="22" cy="75" rx="13" ry="5" fill="#c9a84c" opacity="0.85" />
      <ellipse cx="78" cy="75" rx="13" ry="5" fill="#c9a84c" opacity="0.85" />

      {/* Drone body */}
      <rect x="34" y="40" width="32" height="20" rx="5" fill="#3d6aad" />
      <rect x="40" y="37" width="20" height="6" rx="3" fill="#2a4f8c" />

      {/* Camera */}
      <circle cx="50" cy="64" r="4" fill="#1a2b4a" />
      <circle cx="50" cy="64" r="2.5" fill="#111e35" />
      <circle cx="50" cy="64" r="1" fill="#3d6aad" opacity="0.8" />

      {/* Mountain silhouette */}
      {showMountains && (
        <path
          d="M0 100 L18 80 L30 88 L48 68 L62 82 L75 72 L90 85 L100 78 L100 100 Z"
          fill="#1a2b4a"
          opacity="0.7"
        />
      )}
    </svg>
  )
}
