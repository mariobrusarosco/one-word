import { useGlobalModal } from "@/domains/shared/providers/store";
import { Dialog, DialogContent } from "../../ui/dialog";

export interface ModalContainerProps {
  children: React.ReactNode;
  openModalWithId: string;
  customOnClose: () => void;
}

export const ModalContainer = ({
  children,
  openModalWithId,
  customOnClose,
}: ModalContainerProps) => {
  const { activeModalId, state, closeModal } = useGlobalModal();

  const shouldDisplayModal =
    state === "open" && openModalWithId === activeModalId;

  if (shouldDisplayModal) {
    return (
      <Dialog
        open
        onOpenChange={() => {
          customOnClose();
          closeModal();
        }}
      >
        <DialogContent className="px-12 overflow-hidden">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return <div></div>;
};
