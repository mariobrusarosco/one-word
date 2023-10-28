import { MemberQueries } from "@/domains/member/server-side/queries";
import { SharedRoutes } from "@/domains/shared/typing/routing";
import { TableRoutes } from "@/domains/tables/typing/enums-and-interfaces";
import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterScreen = async () => {
  const member =
    (await MemberQueries.fetchMember()) || (await MemberQueries.createMember());

  if (member === null) {
    return redirect(SharedRoutes.NOT_FOUND);
  }

  return (
    <div>
      You are registed on our app. Go to{" "}
      <Link href={TableRoutes.HOME}>Table&apos;s rooms</Link>
    </div>
  );
};

export default RegisterScreen;
