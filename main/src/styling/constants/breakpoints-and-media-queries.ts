export const SCREENS_RANGE = {
  mobile: {
    start: "0px",
    end: "767px",
  },
  tablet: {
    start: "768px",
    end: "1365px",
  },
  desktop: {
    start: "1366px",
  },
};

const ONLY_MOBILE_SCREENS = {
  max: SCREENS_RANGE.mobile.end,
  mediaQuery: `(max-width: ${SCREENS_RANGE.mobile.end}px)`,
};

const ONLY_TABLET_SCREENS = {
  min: SCREENS_RANGE.tablet.start,
  max: SCREENS_RANGE.tablet.end,
  mediaQuery: `(min-width: ${SCREENS_RANGE.tablet.start}px) and (max-width: ${SCREENS_RANGE.tablet.end}px)`,
};

const STARTING_FROM_TABLET_SCREENS = {
  min: SCREENS_RANGE.tablet.start,
  mediaQuery: `(min-width: ${SCREENS_RANGE.tablet.start}px)`,
};

const STARTING_FROM_DESKTOP_SCREENS = {
  min: SCREENS_RANGE.desktop.start,
  mediaQuery: `(min-width: ${SCREENS_RANGE.desktop.start}px)`,
};

export const APP_BREAKPOINTS = {
  ["only-m"]: ONLY_MOBILE_SCREENS,
  ["only-t"]: ONLY_TABLET_SCREENS,
  tablet: STARTING_FROM_TABLET_SCREENS,
  desktop: STARTING_FROM_DESKTOP_SCREENS,
};
