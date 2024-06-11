import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/domains/ui-system/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-regular ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-rose-800 border-2 border-transparent text-neutral-100 hover:bg-rose-800/80",
        secondary: "bg-violet-800 hover:bg-violet-500/50 text-neutral-100",
        outline:
          "shadow-none bg-transparent text-rose-800 border-2 border-rose-800 hover:bg-rose-800 hover:text-neutral-100",
        danger: "bg-red-400 text-neutral-100 hover:bg-red-400/80 ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 underline shadow-none",
      },
      roundness: {
        none: "rounded-none",
        tiny: "rounded-sm",
        small: "rounded",
        medium: "rounded-lg",
        large: "rounded-2xl",
        full: "rounded-full",
      },
      size: {
        "extra-small": "h-8 p-2 text-xs",
        small: "h-12 py-2 px-2 text-sm",
        medium: "h-11 px-4 text-sm",
        large: "h-16  px-4 text-2xl",
      },
    },
    compoundVariants: [
      { roundness: "full", size: "extra-small", class: "w-8" },
      { roundness: "full", size: "small", class: "w-12" },
      { roundness: "full", size: "medium", class: "w-15" },
      { roundness: "full", size: "large", class: "w-20" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "small",
      roundness: "small",
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
