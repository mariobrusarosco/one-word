import { Separator } from "@/domains/ui-system/components/ui/separator";

interface Props {
  title: string;
  subtitle?: string;
}

const ScreenHeading = ({ subtitle, title }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-baseline text-rose-800 dark:text-neutral-100">
        <h2 className="font-josefin text-4xl">{title}</h2>

        {subtitle ? <p className="font-light text-lg">{subtitle}</p> : null}
      </div>

      <Separator className="bg-rose-800 dark:bg-neutral-100 mt-4" />
    </div>
  );
};

export { ScreenHeading };
