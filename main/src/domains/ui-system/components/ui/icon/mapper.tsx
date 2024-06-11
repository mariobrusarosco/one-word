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
  IconSunMoon,
  IconHome2,
  IconHash,
  IconUsers,
  IconBrandGithub,
  IconBrandFigma,
  IconSquareRoundedCheck,
  IconBarrierBlock,
  IconShield,
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
  | "table-plus"
  | "home"
  | "hashtag"
  | "users"
  | "brand-github"
  | "brand-figma"
  | "square-rounded-checked"
  | "barrier-block"
  | "sun-moon"
  | "shield";

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
  "sun-moon": IconSunMoon,
  home: IconHome2,
  hashtag: IconHash,
  users: IconUsers,
  "brand-github": IconBrandGithub,
  "brand-figma": IconBrandFigma,
  "square-rounded-checked": IconSquareRoundedCheck,
  "barrier-block": IconBarrierBlock,
  shield: IconShield,
};

export type iconSizes = "extra-small" | "small" | "medium" | "large";

export const sizeMapper: Record<iconSizes, string> = {
  "extra-small": "w-4 h-4",
  small: "w-6 h-6",
  medium: "w-8 h-8",
  large: "w-10 h-10",
};
