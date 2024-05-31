import { useSearchParams } from "react-router-dom";

export const useModal = (id: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get(`${id}-modal`) === "true";

  return {
    isOpen,
    openModal: () => {
      searchParams.set(`${id}-modal`, "true");
      setSearchParams(searchParams);
    },
    closeModal: () => {
      searchParams.delete(`${id}-modal`);
      setSearchParams(searchParams);
    },
  };
};
