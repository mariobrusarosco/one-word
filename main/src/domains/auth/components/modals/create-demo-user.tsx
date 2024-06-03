import { Button } from "@/domains/ui-system/components/ui/button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
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
import { userDemoMutation } from "../../api/mutations";

export const CreateDemoUser = () => {
  const { closeModal, openModal, isOpen } = useModal("create-demo-user");
  const [userDemo, setuserDemo] = useState("");

  const mutation = useMutation({
    mutationFn: userDemoMutation,
    onError: (error) => {
      alert(error);
    },
    onSuccess: async () => {
      alert("user created");
      closeModal();
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserDemo(e.target.value);
  };

  const handleDemoUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutation.mutate(userDemo);
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
          variant="outline"
          size="small"
          disabled={mutation.isPending}
          onClick={openModal}
        >
          <Icon
            name="plus"
            className="stroke-white-100 flex w-8 dark:stroke-teal-800"
          />
          create demo user?
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeader>
          <p className="text-pink-500 text-4xl font-sans font-extralight">
            Create a Demo User
          </p>
        </GlobalDialogHeader>

        <GlobalDialogDescription>
          <p className="text-teal-800 text-lg font-sans font-extralight">
            Type your user's name for demo purposes
          </p>
        </GlobalDialogDescription>
        <form onSubmit={handleDemoUser}>
          <div className="flex items-end gap-x-2 justify-center pt-14">
            <div className="flex flex-col gap-y-3">
              <label
                className="uppercase text-pink-500 text-lg"
                htmlFor="user-demo-name"
              >
                Demo User Name
              </label>
              <input
                value={userDemo}
                onChange={handleInputChange}
                type="text"
                id="user-demo-name"
                placeholder="Type your demo's name here"
                className="rounded-sm py-2 px-4 border-2 border-pink-500 placeholder:opacity-80 placeholder:text-xs text-teal-800 font-sans font-light"
              />
            </div>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="text-xl font-extralight px-8"
            >
              create user
            </Button>
          </div>
        </form>
      </GlobalDialogContent>
    </Dialog>
  );
};
