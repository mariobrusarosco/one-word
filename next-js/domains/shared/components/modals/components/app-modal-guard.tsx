import { useModal } from "@/domains/shared/providers/hooks/modal";
import React from "react";

export interface ModalContainerProps {
  children: React.ReactNode;
  modalUI: string;
  modalID?: string;
}

export const AppModalGuard = (props: ModalContainerProps) => {
  const modalProps = useModal();
  const shouldDisplayModal = props.modalUI === modalProps.ui;

  if (React.isValidElement(props.children) && shouldDisplayModal) {
    return React.cloneElement(props.children, modalProps);
  }

  return null;
};
