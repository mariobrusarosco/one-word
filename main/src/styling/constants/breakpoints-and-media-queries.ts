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
    end: "1536px",
  },
  "large-desktop": {
    start: "1536px",
  },
  "full-hd": {
    start: "1920px",
  },
};

export const APP_BREAKPOINTS = {
  sm: { min: SCREENS_RANGE.mobile.start },
  md: { min: SCREENS_RANGE.tablet.start },
  lg: { min: SCREENS_RANGE.desktop.start },
  xl: { min: SCREENS_RANGE["large-desktop"].start },
  fh: { min: SCREENS_RANGE["full-hd"].start },
};
