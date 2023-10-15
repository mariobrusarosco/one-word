import { useModal } from "@/domains/shared/providers/hooks/modal";

export interface ModalContainerProps {
  children: React.ReactNode;
  modalUI: string;
  modalID?: string;
}

export const AppModalGuard = ({
  children,
  modalUI,
  modalID,
}: ModalContainerProps) => {
  const { ui, id } = useModal();
  const shouldDisplayModal = modalUI === ui && modalID === id;

  if (shouldDisplayModal) {
    return children;
  }

  return null;
};
