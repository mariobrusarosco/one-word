import { Separator } from "@/domains/ui-system/components/ui/separator";
import { Skeleton } from "@/domains/ui-system/components/ui/skeleton";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  loading?: boolean;
}

export const ScreenHeading = ({
  subtitle,
  title,
  children,
  loading,
}: Props) => {
  if (!title) return null;

  if (loading) return <ScreenHeadingLoading />;

  return (
    <>
      <div className="flex justify-between items-baseline w-full text-rose-800 dark:text-neutral-100">
        <div className="flex items-baseline gap-x-4">
          <h2 className="font-josefin text-4xl">{title}</h2>
          {subtitle ? <p className="text-sm uppercase">{subtitle}</p> : null}
        </div>

        {children ? <div className="ml-auto">{children}</div> : null}
      </div>

      <Separator className="bg-rose-800 dark:bg-neutral-100 mt-4" />
    </>
  );
};

export const ScreenHeadingLoading = () => {
  return (
    <div data-ui="table-screen-loading">
      <div className="flex gap-x-4 w-full">
        <Skeleton className="w-[150px] h-[40px]" />
        <Skeleton className="w-[100px] h-[40px]" />
        <Skeleton className="w-[200px] h-[40px] ml-auto" />
      </div>

      <Separator className="bg-rose-800 dark:bg-neutral-100 mt-4" />
    </div>
  );
};
