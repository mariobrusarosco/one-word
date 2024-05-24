import {
  IconX,
  IconPlus,
  IconChevronUp,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconGridDots,
  IconDeviceGamepad,
  IconTablePlus,
  IconLayoutDashboard,
} from "@tabler/icons-react";

type names =
  | "chevron-down"
  | "chevron-up"
  | "chevron-right"
  | "chevron-left"
  | "close"
  | "icon-plus"
  | "plus"
  | "grid-dots"
  | "device-gamepad"
  | "layout-dashboard"
  | "table-plus";

export const iconMapper: Record<names, any> = {
  ["chevron-down"]: IconChevronDown,
  ["chevron-up"]: IconChevronUp,
  ["chevron-right"]: IconChevronRight,
  ["chevron-left"]: IconChevronLeft,
  close: IconX,
  "icon-plus": IconPlus,
  plus: IconPlus,
  "grid-dots": IconGridDots,
  "device-gamepad": IconDeviceGamepad,
  "table-plus": IconTablePlus,
  "layout-dashboard": IconLayoutDashboard,
};

export type iconSizes = "extra-small" | "small" | "medium" | "large";

export const sizeMapper: Record<iconSizes, string> = {
  "extra-small": "w-4 h-4",
  small: "w-6 h-6",
  medium: "w-8 h-8",
  large: "w-10 h-10",
};
