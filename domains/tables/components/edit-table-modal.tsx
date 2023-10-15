"use client";

import { Button } from "@/domains/shared/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/domains/shared/components/ui/dialog";
import { Separator } from "@/domains/shared/components/ui/separator";
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
import api from "@/domains/shared/api/rest";
import { TableEndpoints } from "../endpoints";
import { tableFormSchema } from "../typing/schemas";
import { TableInputData } from "../typing/enums-and-interfaces";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "@/domains/shared/components/ui/tooltip";
import { GlobalTooltips } from "@/domains/shared/typing/ui";
import { Info } from "lucide-react";
import Image from "next/image";
import { ImageUploader } from "@/domains/shared/components/image-uploader/image-uploader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Table } from ".prisma/client";
import { AppModalGuardBase } from "@/domains/shared/components/modals/components/app-modal-base";

interface Props {
  table: Table;
}
export const EditTableModal = ({ table }: Props) => {
  console.log("[EditTableModal]");
  const [uploadingImage, setUploadingImage] = useState(false);
  // TODO [PROJECT SPECIFIC FEATURE] : consider lib's hook to use a native 'isUploading'
  // https://docs.uploadthing.com/api-reference/react#useuploadthing
  const router = useRouter();
  const form = useForm<TableInputData>({
    defaultValues: {
      name: table.name,
      imageUrl: "",
    },
    resolver: zodResolver(tableFormSchema),
  });

  const formIsLoading = form.formState.isSubmitting;

  const handleOnSubmit = async (formValues: TableInputData) => {
    try {
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      await api.patch(TableEndpoints.UPDATE.replace(":tableId", table.id), {
        name: formValues.name,
      });
      form.reset();
      router.refresh();
      // closeModal();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES_FORM]: ", error);
    } finally {
    }
  };

  return (
    <AppModalGuardBase customOnClose={() => form.reset()}>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          Edit Table
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base mt-4">
          You can change your table&apos;s name whenever you want.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <div className="grid grid-cols-[minmax(140px,auto)_auto_minmax(140px,auto)] mt-12 gap-8 min-h-[250px]">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => {
                  return (
                    <>
                      <FormLabel className="uppercase text-primary-base text-xs">
                        <p className="uppercase text-secondary-base text-xs">
                          image upload
                        </p>
                        <TooltipProvider
                          delayDuration={GlobalTooltips.DURATION}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-secondary-base inline-flex" />
                            </TooltipTrigger>
                            <TooltipContent
                              className="bg-secondary-base text-neutral-white max-w-[250px] text-center"
                              side="right"
                            >
                              If you don&apos;t upload an image, we&apos;use a
                              default one.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        {field.value ? (
                          <Image
                            className="rounded-full"
                            alt="image to upload"
                            src={field.value}
                            width={100}
                            height={100}
                            priority={true}
                          />
                        ) : (
                          <ImageUploader
                            endpoint="imageUploader"
                            setUploadingImage={setUploadingImage}
                            onChangeImageUrl={field.onChange}
                          />
                        )}
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </>
                  );
                }}
              />
            </div>

            <Separator
              className="w-[1px] bg-primary-base"
              orientation="vertical"
            />

            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <>
                      <FormLabel className="uppercase text-primary-base text-xs">
                        table name
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

              <Button
                type="submit"
                className="ml-auto"
                disabled={uploadingImage}
                loading={formIsLoading}
              >
                create
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </AppModalGuardBase>
  );
};
