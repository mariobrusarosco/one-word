import { Dialog, DialogContent } from "../../ui/dialog";
import { useModal } from "@/domains/shared/providers/hooks/modal";

export interface ModalContainerProps {
  children: React.ReactNode;
  customOnClose?: () => void;
}

export const AppModalGuardBase = ({
  children,
  customOnClose,
}: ModalContainerProps) => {
  const { close } = useModal();

  return (
    <Dialog
      open
      onOpenChange={() => {
        customOnClose && customOnClose();
        close();
      }}
    >
      <DialogContent className="px-12 overflow-hidden">
        {children}
      </DialogContent>
    </Dialog>
  );
};
