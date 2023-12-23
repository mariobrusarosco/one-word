import { useState } from "react";

export const useToogle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const waitFourSecondsAndToggle = () => {
    setTimeout(() => {
      toggle();
    }, 4000);
  };

  return {
    isVisible,
    toggle,
    waitFourSecondsAndToggle,
  };
};
