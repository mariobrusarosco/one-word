import { MemberAvatar } from "@/domains/shared/components/member-line/member-avatar";

export const MemberMessage = () => {
  return (
    <div className="p-3 bg-neutral-white shadow-bottom flex gap-3 items-center">
      <MemberAvatar
        fullName={"Mario Brusarosco de Almeida"}
        className="bg-secondary-base"
      />

      <div>
        <div className="flex items-center text-xs gap-3 font-semibold">
          <p className="text-neutral-white py-1 px-2 bg-primary-base rounded-sm ">
            Mario Brusarosco
          </p>
          <p className="text-primary-base">01/01/23 22:36</p>
        </div>
        <p className="text-sm text-secondary-base">
          Hello world Hello world Hello world Hello world Hello world
        </p>
      </div>
    </div>
  );
};
