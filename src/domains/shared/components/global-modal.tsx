import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/domains/ui-system/components/ui/dialog";

export const GlobalDialogHeading = ({
  description,
  title,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <DialogHeader
        data-ui="global-modal-header"
        className="global-modal-header text-rose-800 dark:text-neutral-100 text-5xl text-center font-normal font-josefin"
      >
        {title}
      </DialogHeader>

      <DialogDescription
        data-ui="global-modal-description"
        className="border-none rounded-md text-violet-800 dark:text-neutral-100 text-xl text-center font-josefin font-light "
      >
        {description}
      </DialogDescription>
    </div>
  );
};

export const GlobalDialogContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DialogContent
      data-ui="global-modal-content"
      className="border-none rounded-md px-16 py-20  bg-neutral-100 dark:bg-violet-800"
    >
      {children}
    </DialogContent>
  );
};
