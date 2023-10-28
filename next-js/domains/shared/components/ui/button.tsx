import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/domains/shared/utils/ui";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "grid place-items-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-base text-neutral-white hover:bg-primary-base/80",
        secondary:
          "bg-secondary-base text-neutral-white hover:bg-secondary-base/70",
        danger: "bg-danger hover:bg-danger/90 text-neutral-white",
        outline: "border border-input bg-background hover:bg-neutral-black/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm px-3 py-3 ",
        sm: "text-sm px-4 py-3",
        md: "text-base px-5 py-4",
        lg: "text-2xl px-6 py-6",
      },
      roundness: {
        square: "rounded-none",
        default: "rounded-sm",
        pill: "rounded-md",
        full: "rounded-full",
      },
      shadow: {
        true: "drop-shadow-main",
        false: "drop-shadow-0",
      },
    },
    compoundVariants: [
      {
        roundness: "full",
        size: "sm",
        class: "w-[20px] h-[20px] p-0 text-sm",
      },
      {
        roundness: "full",
        size: "md",
        class: "w-[30px] h-[30px] p-0 text-md",
      },
      {
        roundness: "full",
        size: "lg",
        class: "w-[45px] h-[45px] p-0 text-lg",
      },
      {
        variant: "link",
        size: ["sm", "md", "lg"],
        class: "p-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "default",
      shadow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      roundness,
      shadow,
      asChild = false,
      loading = false,
      ...props
    },
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
      >
        {loading ? <Loader2 className="animate-spin" /> : props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
