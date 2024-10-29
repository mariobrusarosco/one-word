import { Spinner } from "@/domains/ui-system/components/ui/spinner";

const AppLoader = () => {
  return (
    <div className="w-full h-full fixed left-0 right-0 grid place-items-center bg-slate-100 dark:bg-violet-800">
      <Spinner />
    </div>
  );
};

export default AppLoader;
