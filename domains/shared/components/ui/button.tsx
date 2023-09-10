import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/domains/shared/utils/ui";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-base text-neutral-white hover:bg-primary-base/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary-base text-neutral-white hover:bg-secondary-base/70",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2",
        sm: "h[25px] w-[25px] px-1 px-1",
        md: "h-[50px] w-[50px] px-3 px-1",
        lg: "h-[100px] w-[100px] px-5",
      },
      roundness: {
        square: "rounded-none",
        default: "rounded-sm",
        pill: "rounded-md",
        full: "rounded-full",
      },
      shadow: {
        true: "drop-shadow-main",
        test: "drop-shadow-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "default",
      shadow: true,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, roundness, shadow, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, roundness, shadow })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
