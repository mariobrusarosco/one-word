import { useGlobalModal } from "@/domains/shared/providers/store";
import { Dialog, DialogContent } from "../../ui/dialog";

export const ModalContainer = ({
  children,
  openModalWithId,
}: {
  children: React.ReactNode;
  openModalWithId: string;
}) => {
  const { activeModalId, state, closeModal } = useGlobalModal();

  const shouldDisplayModal =
    state === "open" && openModalWithId === activeModalId;

  if (shouldDisplayModal) {
    return (
      <Dialog open onOpenChange={closeModal}>
        <DialogContent className="px-12 overflow-hidden">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return <div></div>;
};
