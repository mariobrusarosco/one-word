import { create } from "zustand";
import {
  ModalContainer,
  ModalContainerProps,
} from "../components/modals/components/modal-container";

interface ModalStore {
  activeModalId: string;
  counter: number;
  increment: any;
  state: "open" | "closed";
  openModal: any;
  closeModal: any;
  ModalElement: ({
    children,
    openModalWithId,
  }: ModalContainerProps) => JSX.Element;
}

export const useGlobalModal = create<ModalStore>((set) => {
  return {
    activeModalId: "",
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    closeModal: () =>
      set(() => ({ state: "closed", activeModalId: undefined })),
    openModal: (id: string) =>
      set(() => ({ state: "open", activeModalId: id })),
    state: "closed",
    ModalElement: ModalContainer,
  };
});
