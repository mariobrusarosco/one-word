"use client";

import { MessageInputData } from "@/domains/messages/typing/enums-and-interfaces";
import { messageFormSchema } from "@/domains/messages/typing/schemas";
import restApi from "@/domains/shared/api/rest";
import { Button } from "@/domains/shared/components/ui/button";
import {
  FormField,
  FormControl,
  Form,
} from "@/domains/shared/components/ui/form";
import { Input } from "@/domains/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MesssagesEndpoints } from "@/domains/messages/endpoints";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

export type ChannelWithMessagesAndMembers = Prisma.ChannelGetPayload<{
  include: {
    messages: { include: { member: { select: { firstName: true } } } };
  };
}>;

interface Props {
  channel: ChannelWithMessagesAndMembers;
}

export const ChatInput = ({ channel }: Props) => {
  const router = useRouter();
  const { userId } = useAuth();
  const form = useForm<MessageInputData>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(messageFormSchema),
  });

  const formIsLoading = form.formState.isSubmitting;
  const formIsValid = form.formState.isValid;
  const queryClient = useQueryClient();
  const handleOnSubmit = async (formValues: MessageInputData) => {
    try {
      const result = await restApi.post(
        MesssagesEndpoints.NEW.replace(":channelId", channel.id),
        { content: formValues.content, memberId: userId }
      );

      router.refresh();
      form.reset();
      queryClient.refetchQueries();

      return result;
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[MESSAGE_FORM]: ", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="flex-1">
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            size="md"
            variant="secondary"
            roundness="full"
            loading={formIsLoading}
            disabled={!formIsValid}
          >
            +
          </Button>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => {
              return (
                <FormControl>
                  <Input
                    className="border-primary-base rounded-sm text-neutral-white bg-transparent placeholder:text-neutral-white focus-visible:ring-offset-transparent"
                    placeholder="type your message"
                    {...field}
                  />
                </FormControl>
              );
            }}
          />
        </div>
      </form>
    </Form>
  );
};
