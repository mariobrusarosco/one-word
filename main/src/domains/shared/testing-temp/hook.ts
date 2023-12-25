import { useEffect, useState } from "react";

export const useToggle = ({
  startVisible,
}: { startVisible?: boolean } = {}) => {
  const [isVisible, setIsVisible] = useState(startVisible);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const waitFourSecondsAndToggle = () => {
    setTimeout(() => {
      console.warn("-------- calling waitFourSecondsAndToggle --------");
      toggle();
    }, 4000);
  };

  return {
    isVisible,
    toggle,
    waitFourSecondsAndToggle,
  };
};

export const useCustomHook = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  useEffect(() => {
    addItem("hello");
  }, []);

  return {
    items,
    addItem,
  };
};
