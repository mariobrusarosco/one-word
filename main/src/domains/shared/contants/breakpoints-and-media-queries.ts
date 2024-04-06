export const APP_BREAKPOINTS = {
  mobile: {
    start: 0,
    end: 767,
  },
  tablet: {
    start: 768,
    end: 1399,
  },
  desktop: {
    start: 1400,
  },
};

export const APP_MEDIA_QUERIES = {
  ["only-m"]: `(max-width: ${APP_BREAKPOINTS.mobile.end}px)`,
  ["only-t"]: `(min-width: ${APP_BREAKPOINTS.tablet.start}px) and (max-width: ${APP_BREAKPOINTS.tablet.end}px)`,
  ["only-d"]: `(min-width: ${APP_BREAKPOINTS.desktop.start}px)`,
  tablet: `(min-width: ${APP_BREAKPOINTS.tablet.start}px)`,
  desktop: `(min-width: ${APP_BREAKPOINTS.desktop.start}px)`,
};
