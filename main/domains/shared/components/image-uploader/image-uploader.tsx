import { UploaderEndpoints } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/domains/shared/utils/uploadthing";
import { Dispatch, SetStateAction } from "react";

interface Props {
  endpoint: UploaderEndpoints;
  setUploadingImage: Dispatch<SetStateAction<boolean>>;
  onChangeImageUrl: (url?: string) => void;
}

export const ImageUploader = ({
  endpoint,
  setUploadingImage,
  onChangeImageUrl,
}: Props) => {
  return (
    <UploadDropzone
      className="py-3 px-4 mt-0 border-secondary-base border-2"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        // TODO [BOILERPLATE] - apply app's toaster
        alert("Upload Completed");
        onChangeImageUrl(res?.[0].url);
        setUploadingImage(false);
      }}
      onUploadBegin={() => setUploadingImage(true)}
      onUploadError={(error: Error) => {
        // TODO [BOILERPLATE] - apply app's toaster
        alert(`ERROR! ${error.message}`);
      }}
      appearance={{
        label: "text-secodary-base w-auto text-xs mt-2",
        uploadIcon: "text-secodary-base text-xs w-7 h-7",
        allowedContent: "text-secodary-base text-xs",
        button:
          "ut-ready:bg-primary-base ut-uploading:bg-primary-base/50 text-sm",
      }}
    />
  );
};
function useUploadThing(
  endpoint: string,
  arg1: { onClientUploadComplete: () => void }
): { startUpload: any } {
  throw new Error("Function not implemented.");
}
