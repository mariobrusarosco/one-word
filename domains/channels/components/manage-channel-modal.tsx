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
import { AppModalGuardBase } from "@/domains/shared/components/modals/components/app-modal-base";
import { WithModalProps } from "@/domains/shared/providers/hooks/modal";
import { isEmpty } from "lodash-es";

type Props = WithModalProps<{
  channels?: Channel[];
}>;

export const ManageChannelModal = ({ channels, id, close }: Props) => {
  const params = useParams();
  const channelToEdit = channels?.find((channel) => channel.id === id);
  const isCreateModal = isEmpty(channelToEdit);

  const router = useRouter();
  const form = useForm<ChannelInputData>({
    defaultValues: {
      name: channelToEdit?.name ?? "",
    },
    resolver: zodResolver(channelFormSchema),
  });

  const formIsLoading = form.formState.isSubmitting;

  const handleOnSubmit = async (formValues: ChannelInputData) => {
    try {
      if (isCreateModal) {
        await restApi.post(ChannelEndpoints.ROOT, {
          name: formValues.name,
          tableId: params?.tableId,
        });
      }

      const result = await restApi.patch(
        ChannelEndpoints.CHANNEL.replace(":channelId", channelToEdit?.id ?? ""),
        { name: formValues.name }
      );

      form.reset({ name: result?.data?.name });
      router.refresh();
      return result;
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_FORM]: ", error);
    }
  };

  return (
    <AppModalGuardBase>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          {isCreateModal ? "Create Channel" : `Edit ${channelToEdit?.name}`}
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
    </AppModalGuardBase>
  );
};
