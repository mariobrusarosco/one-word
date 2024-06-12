import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { CreateDemoUser } from "../components/public/modals/create-demo-user";

const LoginScreen = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center  bg-neutral-100 dark:bg-violet-800">
      <h1 className="text-6xl uppercase font-extralight font-josefin mb-4 dark:text-neutral-100">
        Login
      </h1>

      <div className="flex items-center justify-center mb-10 gap-2 max-w-[800px] mx-auto">
        <Icon
          name="barrier-block"
          className="w-[100px] h-[100px] text-rose-800 dark:text-neutral-100"
          stroke={1}
        />
        <p className="text-xl text-violet-800 font-light text-pretty dark:text-neutral-100">
          The Sign In/Up feature is in progress. In the meanwhile, you can
          quickly create a demo user
        </p>
      </div>

      <CreateDemoUser />
    </div>
  );
};

export default LoginScreen;
