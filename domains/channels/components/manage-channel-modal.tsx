"use client";

import { Button } from "@/domains/shared/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/domains/shared/components/ui/dialog";
import { Input } from "@/domains/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/domains/shared/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { channelFormSchema } from "../typing/schemas";
import { ChannelInputData } from "../typing/enums-and-interfaces";
import { useParams, useRouter } from "next/navigation";
import { Channel } from "@prisma/client";
import restApi from "@/domains/shared/api/rest";
import { ChannelEndpoints } from "../endpoints";
import { AppModalGuard } from "@/domains/shared/components/modals/components/app-modal-guard";

interface Props {
  modalMode: "create" | "edit";
  channel?: Channel;
}

export const ManageChannelModal = ({ modalMode, channel }: Props) => {
  const params = useParams();
  const isCreateModal = modalMode === "create";
  const isEditModal = !isCreateModal;

  const router = useRouter();
  const form = useForm<ChannelInputData>({
    defaultValues: {
      name: channel?.name ?? "",
    },
    resolver: zodResolver(channelFormSchema),
  });

  const formIsLoading = form.formState.isSubmitting;
  const formIsValid = form.formState.isValid;
  const formErrors = form.formState.errors;

  const handleOnSubmit = async (formValues: ChannelInputData) => {
    try {
      if (isCreateModal) {
        await restApi.post(ChannelEndpoints.ROOT, {
          name: formValues.name,
          tableId: params?.tableId,
        });
      }
      if (isEditModal) {
        await restApi.patch(
          ChannelEndpoints.CHANNEL.replace(":channelId", channel?.id ?? ""),
          {
            name: formValues.name,
          }
        );
      }

      router.refresh();
      form.reset();
      // closeModal();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log(`[${modalMode}_CHANNEL_FORM]: `, error);
    } finally {
    }
  };

  return (
    <AppModalGuard modalUI="manage-channel" modalID={channel?.id}>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          {isCreateModal ? "Create Channel" : `Edit ${channel?.name}`}
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base mt-4">
          {isCreateModal ? "Set a name for" : "Edit the name of"} your channel
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <>
                    <FormLabel className="uppercase text-primary-base text-xs">
                      channel name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-primary-base rounded-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </>
                );
              }}
            />

            <Button type="submit" className="ml-auto" loading={formIsLoading}>
              save
            </Button>
          </div>
        </form>
      </Form>
    </AppModalGuard>
  );
};
