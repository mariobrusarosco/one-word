import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils";

const spinnerVariants = cva("inline-flex", {
  variants: {
    inner: {
      primary: "stroke-rose-500 dark:stroke-rose-800",
      secondary: "stroke-rose-100 dark:stroke-violet-800",
    },
    outer: {
      primary: "stroke-rose-500 dark:stroke-rose-100",
      secondary: "stroke-rose-500 dark:stroke-violet-100",
    },
    size: {
      small: "h-6 w-6",
      medium: "h-16 w-16",
      large: "h-24 w-24",
    },
  },
  defaultVariants: {
    // inner: "primary",
    // outer: "primary",
    size: "medium",
  },
});

export interface SpinnerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, inner, outer }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(spinnerVariants({ size }))}
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          strokeWidth="1"
          className={cn(spinnerVariants({ size, inner, className }))}
        />
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2"
          strokeWidth="3"
          className={cn(
            " animate-spin origin-center",
            spinnerVariants({ size, outer, className })
          )}
        />
      </svg>
    );
  }
);
Spinner.displayName = "Spinner";
