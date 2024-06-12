import { Button } from "@/domains/ui-system/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useModal } from "@/domains/ui-system/hooks/use-modal";
import {
  GlobalDialogContent,
  GlobalDialogHeading,
} from "@/domains/shared/components/global-modal";
import {
  Dialog,
  DialogTrigger,
} from "@/domains/ui-system/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { inviteFriendMutation } from "../../api/mutations";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

export const InviteMember = ({ tableId }: { tableId: string }) => {
  const { closeModal, openModal, isOpen } = useModal("invite-friend");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: inviteFriendMutation,
    onError: (error) => {
      toast({
        title: "Ops! Something went wrong when inviting your friend",
      });
      console.error(error);
    },
    onSuccess: async () => {
      toast({
        variant: "success",
        title: "All good! Your friend can seat on this table!",
      });
      closeModal();
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMemberInvite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutation.mutate({ tableId, email });
    setEmail("");
  };

  return (
    <Dialog
      onOpenChange={(opening: boolean) => {
        if (!opening) return closeModal();
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <div className="flex items-baseline gap-x-2 pt-12">
          <p className="text-violet-800 dark:text-neutral-100 text-lg">
            Invite a friend
          </p>
          <Button
            variant="primary"
            size="extra-small"
            roundness="medium"
            disabled={mutation.isPending}
            onClick={openModal}
          >
            <Icon name="plus" size="extra-small" />
          </Button>
        </div>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeading
          description="Type your friends's email here. This email needs to be already registed in our platform."
          title="Invite a friend to this table"
        />

        <form onSubmit={handleMemberInvite}>
          <div className="flex items-end gap-x-4 justify-center pt-14">
            <div className="flex flex-col gap-y-3">
              <label
                className="uppercase text-rose-800 text-lg"
                htmlFor="member-to-be-invited-email"
              >
                Email
              </label>
              <input
                value={email}
                onChange={handleInputChange}
                type="email"
                id="member-to-be-invited-email"
                placeholder="Type your friends's email here"
                className="rounded-sm py-2 px-4 border-2 h-12 border-rose-800 placeholder:opacity-80 placeholder:text-xs text-violet-800 font-sans font-light"
              />
            </div>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="text-xl font-extralight px-8"
            >
              invite friend
            </Button>
          </div>
        </form>
      </GlobalDialogContent>
    </Dialog>
  );
};
