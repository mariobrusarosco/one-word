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
import { useState } from "react";
import { Separator } from "@/domains/shared/components/ui/separator";

type Props = WithModalProps<{
  channels?: Channel[];
}>;

export const DeleteChannelModal = ({ channels, id, close }: Props) => {
  const channelToDelete = channels?.find((channel) => channel.id === id);
  const router = useRouter();
  // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
  const [isDeletingChannel, setIsDeletingChannel] = useState(false);

  const handleDeleteChannel = async () => {
    try {
      setIsDeletingChannel(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await restApi.delete(`/channels/${channelToDelete?.id}`);
      close?.();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_SETTINGS_MENU]: ", error);
    } finally {
      router.refresh();
      setIsDeletingChannel(false);
    }
  };

  const handleCancel = () => close?.();

  return (
    <AppModalGuardBase>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          Delete Channel {channelToDelete?.name}
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base mt-4">
          Are you sure?
        </DialogDescription>
      </DialogHeader>

      <div className="flex gap-5 justify-center max-w-[150px] mx-auto mt-5">
        <Button onClick={handleCancel} variant="outline" size="sm">
          Cancel
        </Button>
        <Separator orientation="vertical" className="bg-primary-base" />
        <Button
          onClick={handleDeleteChannel}
          loading={isDeletingChannel}
          size="sm"
        >
          delete
        </Button>
      </div>
    </AppModalGuardBase>
  );
};
