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
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { DemoUsers } from "../demo-users";

export const SetupDemoUsers = () => {
  const { closeModal, openModal, isOpen } = useModal("setup-demo");

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
          <span>Access the MVP</span>
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeading title="Explore the MVP" />

        <div className="mt-16 gap-x-4">
          <h2 className="text-violet-800 dark:text-neutral-100 uppercase font-josefin text-2xl font-light mb-2">
            instructions
          </h2>
          <Separator className="bg-violet-500 dark:bg-neutral-100 mt-1 mb-2" />

          <ul className="my-10 flex flex-col gap-6">
            <li className="flex gap-x-2 align-center">
              <Icon
                name="hashtag"
                size="small"
                className="text-rose-800 dark:text-neutral-100 stroke-width-1"
                stroke={1}
              />
              <p className="text-xl font-light font-josefin text-violet-800 dark:text-neutral-100">
                To fully simulate this Game, it's recommended to open it in{" "}
                <strong>two different Browser's windows.</strong>
              </p>
            </li>
          </ul>
        </div>

        <p className="text-center text-2xl font-light font-josefin text-violet-800 dark:text-neutral-100">
          Select a User
        </p>

        <DemoUsers handleUserSelection={closeModal} />
      </GlobalDialogContent>
    </Dialog>
  );
};
