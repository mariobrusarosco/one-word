import { Button } from "@/domains/ui-system/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useModal } from "@/domains/ui-system/hooks/use-modal";
import {
  GlobalDialogContent,
  GlobalDialogDescription,
  GlobalDialogHeader,
} from "@/domains/shared/components/global-modal";
import {
  Dialog,
  DialogTrigger,
} from "@/domains/ui-system/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { inviteFriendMutation } from "../../api/mutations";

export const InviteMember = ({ tableId }: { tableId: string }) => {
  const { closeModal, openModal, isOpen } = useModal("invite-friend");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

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
      navigate(`tables/${tableId}`);
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
        <Button
          variant="primary"
          size="medium"
          disabled={mutation.isPending}
          onClick={openModal}
        >
          invite friend
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeader>
          <p className="text-pink-500 text-4xl font-sans font-extralight text-center">
            Invite a friend to this table
          </p>
        </GlobalDialogHeader>

        <GlobalDialogDescription>
          <p className="text-teal-800 text-lg font-sans font-extralight text-center">
            Type your friends's email here. This email needs to be already
            registed in our platform.
          </p>
        </GlobalDialogDescription>

        <form onSubmit={handleMemberInvite}>
          <div className="flex items-end gap-x-2 justify-center pt-14">
            <div className="flex flex-col gap-y-3">
              <label
                className="uppercase text-pink-500 text-lg"
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
                className="rounded-sm py-2 px-4 border-2 border-pink-500 placeholder:opacity-80 placeholder:text-xs text-teal-800 font-sans font-light"
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
