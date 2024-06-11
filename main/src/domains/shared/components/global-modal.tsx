import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/domains/ui-system/components/ui/dialog";

export const GlobalDialogContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DialogContent className="global-modal-content border-none rounded-md p-20 bg-neutral-100 dark:bg-violet-800">
      {children}
    </DialogContent>
  );
};

export const GlobalDialogHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DialogHeader className="global-modal-header pr-12">
      {children}
    </DialogHeader>
  );
};

export const GlobalDialogDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DialogDescription className="global-modal-content border-none rounded-md ">
      {children}
    </DialogDescription>
  );
};
