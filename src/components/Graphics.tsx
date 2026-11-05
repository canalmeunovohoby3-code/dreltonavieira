type GraphicProps = {
  className?: string;
};

export function SinalPulso({ className }: GraphicProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 180"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 96h140l14-30 14 60 16-90 18 122 16-62h166l14-24 12 44 14-20h206"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="184" cy="36" r="3.5" fill="currentColor" />
    </svg>
  );
}
