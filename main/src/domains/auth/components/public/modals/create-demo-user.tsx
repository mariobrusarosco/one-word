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
import { userDemoMutation } from "../../../api/mutations";
import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const CreateDemoUser = () => {
  const { closeModal, openModal, isOpen } = useModal("create-demo-user");
  const [userDemo, setuserDemo] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const demoEmail = `${userDemo.replace(/\s/gi, "_").toLowerCase()}@demo.com`;

  const mutation = useMutation({
    mutationFn: userDemoMutation,
    onError: (error) => {
      toast({
        title: "Ops! Something went wrong when creating your demo user",
      });
      console.error(error);
    },
    onSuccess: async () => {
      toast({
        variant: "success",
        title: "Demo user created!",
      });
      closeModal();
      navigate("/tables");
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
          variant="primary"
          size="medium"
          disabled={mutation.isPending}
          onClick={openModal}
        >
          Create User
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <div className="text-center font-josefin">
          <GlobalDialogHeader>
            <p className="text-rose-800 dark:text-neutral-100 text-5xl text-center ">
              Create a Demo User
            </p>
          </GlobalDialogHeader>

          <GlobalDialogDescription>
            <p className="text-violet-800 dark:text-neutral-100 text-xl font-light">
              Just a user's name e.g. Jane Doe.
            </p>
          </GlobalDialogDescription>
        </div>

        <form onSubmit={handleDemoUser}>
          <div className="flex flex-col mt-14">
            <label
              className="uppercase text-rose-800 dark:text-neutral-100 text-lg"
              htmlFor="user-demo-name"
            >
              Demo User Name
            </label>

            <div className="flex gap-x-2">
              <input
                value={userDemo}
                onChange={handleInputChange}
                type="text"
                id="user-demo-name"
                placeholder="Type your demo's name here"
                className="flex-1 rounded-sm py-2 px-4 border-2 border-rose-800 placeholder:opacity-80 placeholder:text-xs text-violet-800 font-light"
              />
              <Button type="submit" disabled={mutation.isPending} size="medium">
                create user
              </Button>
            </div>

            {userDemo ? (
              <p className="font-light text-xs mt-2 text-violet-500 dark:text-neutral-100">
                You will be logged with an email of{" "}
                <strong className="font-bold text-violet-800 dark:text-neutral-100">
                  {demoEmail}
                </strong>
              </p>
            ) : null}
          </div>
        </form>
      </GlobalDialogContent>
    </Dialog>
  );
};
