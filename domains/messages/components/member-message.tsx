import { MemberAvatar } from "@/domains/shared/components/member-line/member-avatar";
import { Prisma } from "@prisma/client";

interface Props {
  message: Prisma.MessageGetPayload<{
    include: { member: { select: { firstName: true } } };
  }>;
}

export const MemberMessage = ({ message }: Props) => {
  return (
    <div className="p-3 bg-neutral-white shadow-bottom flex gap-3 items-center">
      <MemberAvatar
        fullName={message.member.firstName}
        className="bg-secondary-base"
      />

      <div>
        <div className="flex items-center text-xs gap-3 font-semibold">
          <p className="text-neutral-white py-1 px-2 bg-primary-base rounded-sm ">
            {message.member.firstName}
          </p>
          <p className="text-primary-base">01/01/23 22:36</p>
        </div>
        <p className="text-sm text-secondary-base">{message.content}</p>
      </div>
    </div>
  );
};
