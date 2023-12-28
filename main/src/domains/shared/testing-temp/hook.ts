import { useEffect, useState } from "react";
import { restApi } from "../../../api/rest";
import { useQuery } from "@tanstack/react-query";

export const useToggle = (
  { startVisible }: { startVisible: boolean } = { startVisible: false }
) => {
  const [isVisible, setIsVisible] = useState(startVisible);

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

export const useFetch = (endpoint: string, queryKey: string) => {
  return useQuery({
    queryKey: ["tables", queryKey, endpoint],
    queryFn: async () => {
      const response = await restApi.get(endpoint);
      console.log("[queryKey]", endpoint, response);
      return response?.data || [];
    },
  });
};
