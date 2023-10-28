import React, { ComponentProps } from "react";
import { getInitials } from "../../utils/string-manipulation";
import { cn } from "../../utils/ui";

interface Props {
  fullName: string;
}

export const MemberAvatar = React.forwardRef<
  HTMLDivElement,
  Props & ComponentProps<"div">
>(({ fullName, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid place-items-center w-[35px] h-[35px] rounded-full bg-primary-base text-neutral-white group-hover:bg-secondary-base text-xs",
        className
      )}
    >
      <span>{getInitials(fullName)}</span>
    </div>
  );
});

MemberAvatar.displayName = "MemberAvatar";
