import { Button } from "@/domains/ui-system/components/ui/button";
import { createTableMutation } from "../../api/mutations";
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

export const CreateTable = () => {
  const { closeModal, openModal, isOpen } = useModal("create-table");
  const [tableNameInput, setTableNameInput] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTableMutation,
    onError: (error) => {
      alert(error);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tables"] });
      closeModal();
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableNameInput(e.target.value);
  };

  const handleCreateTable = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutation.mutate(tableNameInput);
    setTableNameInput("");
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
          roundness="full"
          size="small"
          disabled={mutation.isPending}
          onClick={openModal}
        >
          <Icon name="plus" />
        </Button>
      </DialogTrigger>

      <GlobalDialogContent>
        <GlobalDialogHeader>
          <p className="text-pink-500 text-4xl font-sans font-extralight">
            Create your own table
          </p>
        </GlobalDialogHeader>

        <GlobalDialogDescription>
          <p className="text-teal-800 text-lg font-sans font-extralight">
            Give your table a name. Don't worry, you can change it later on.
          </p>
        </GlobalDialogDescription>
        <form onSubmit={handleCreateTable}>
          <div className="flex items-end gap-x-2 justify-center pt-14">
            <div className="flex flex-col gap-y-3">
              <label
                className="uppercase text-pink-500 text-lg"
                htmlFor="table-name"
              >
                Table name
              </label>
              <input
                value={tableNameInput}
                onChange={handleInputChange}
                type="text"
                id="table-name"
                placeholder="Type your table's name here"
                className="rounded-sm py-2 px-4 border-2 border-pink-500 placeholder:opacity-80 placeholder:text-xs text-teal-800 font-sans font-light"
              />
            </div>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="text-xl font-extralight px-8"
            >
              create
            </Button>
          </div>
        </form>
      </GlobalDialogContent>
    </Dialog>
  );
};
