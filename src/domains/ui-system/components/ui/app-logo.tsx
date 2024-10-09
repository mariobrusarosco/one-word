import { cn } from "../../utils";

const AppLogo = ({ className }: { className: string }) => {
  return (
    <div className={cn("icon-wrapper flex", className)}>
      <svg viewBox="0 0 100 100" fill="none">
        <path
          d="M50.0085 40.3906H11.6017C6.29883 40.3906 2 44.6895 2 49.9923V88.3991C2 93.702 6.29883 98.0008 11.6017 98.0008H50.0085C55.3114 98.0008 59.6102 93.702 59.6102 88.3991V49.9923C59.6102 44.6895 55.3114 40.3906 50.0085 40.3906Z"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.429 59.5929L95.232 42.7899C97.0132 40.8143 97.9991 38.2487 97.9991 35.5886C97.9991 32.9286 97.0132 30.3629 95.232 28.3873L71.2277 4.76716C69.2521 2.98588 66.6865 2 64.0264 2C61.3664 2 58.8007 2.98588 56.8252 4.76716L40.4062 21.1861"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2031 78.7969H21.252"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.4062 59.5938H40.4552"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.4062 21.1855H64.4552"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.8125 35.5898H78.8614"
          stroke="inherit"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export { AppLogo };
