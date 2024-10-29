export const Spinner = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        strokeWidth="3"
        className="stroke-rose-500 dark:stroke-rose-100"
      />
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2"
        strokeWidth="3"
        className="stroke-violet-800 dark:stroke-rose-700 animate-spin origin-center"
      />
    </svg>
  );
};
