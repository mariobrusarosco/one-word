import { Button } from "@/domains/ui-system/components/ui/button";
import { useModal } from "@/domains/ui-system/hooks/use-modal";
import {
  GlobalDialogContent,
  GlobalDialogHeading,
} from "@/domains/shared/components/global-modal";
import {
  Dialog,
  DialogTrigger,
} from "@/domains/ui-system/components/ui/dialog";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

export const WatchDemo = () => {
  const { closeModal, openModal, isOpen } = useModal("watch-demo");

  return (
    <Dialog
      onOpenChange={(opening: boolean) => {
        if (!opening) return closeModal();
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <Button
          asChild
          className="cursor-pointer"
          variant="primary"
          size="medium"
          roundness="medium"
          onClick={openModal}
        >
          <span>Watch a demo</span>
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeading
          title="Demo"
          description="Watch the latest demo."
        />
        <video controls>
          <source src="demo.mp4" type="video/mp4" />
        </video>
      </GlobalDialogContent>
    </Dialog>
  );
};
