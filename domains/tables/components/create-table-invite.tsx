"use client";

import { Button } from "@/domains/shared/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/domains/shared/components/ui/dialog";
import { Separator } from "@/domains/shared/components/ui/separator";
import { Input } from "@/domains/shared/components/ui/input";
import { useGlobalModal } from "@/domains/shared/providers/store";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/domains/shared/components/ui/form";
import { z } from "zod";
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

export const CreateTableInviteModal = () => {
  const router = useRouter();
  const { ModalElement, openModal, closeModal } = useGlobalModal();
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleOnClick = async () => {
    try {
      // await api.patch(, {})
      router.refresh();
      closeModal();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[INVITATION_MODAL]: ", error);
    }
  };

  return (
    <ModalElement openModalWithId="create-table-modal">
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          Invitation
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base mt-4">
          Do you want to join this table?
        </DialogDescription>
      </DialogHeader>

      <div>
        <Button onClick={handleOnClick}>Yes</Button>
      </div>
    </ModalElement>
  );
};
