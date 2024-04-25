import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/domains/ui-system/utils";

const buttonVariants = cva(
  "shadow-main-bottom inline-flex items-center justify-center whitespace-nowrap rounded font-regular ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-pink-500 dark:bg-white text-white dark:text-teal-800 hover:bg-pink-800 dark:hover:bg-pink-100",
        secondary:
          "bg-teal-800 dark:bg-pink-500 dark:text-white text-white hover:bg-teal-800/80  dark:hover:bg-pink-800",
        danger:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-white border-white border border-white bg-transparent hover:bg-accent hover:text-accent-foreground shadow-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      roundness: {
        default: "rounded",
        full: "rounded-full",
      },
      size: {
        small: "h-8  py-3 px-4 text-sm",
        medium: "h-11  px-4 text-base",
        large: "h-16  px-8 text-2xl",
        // icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      { roundness: "full", size: "small", class: "w-8" },
      { roundness: "full", size: "medium", class: "w-11" },
      { roundness: "full", size: "large", class: "w-16" },
      // {
      //   roundness: "full",
      //   size: ["small", "medium", "large"],
      //   class: "w-[45px] h-[45px] p-0 text-lg",
      // },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      roundness: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, roundness, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, roundness }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
