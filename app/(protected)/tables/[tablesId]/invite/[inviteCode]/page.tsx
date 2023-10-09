import { Separator } from "@/domains/shared/components/ui/separator";

import { Dices, Pen, SquareEqual } from "lucide-react";
import { TableEndpoints } from "@/domains/tables/endpoints";
import { JoinTableButton } from "./join-table-button";

interface Props {
  params: { inviteCode: string };
}

const InvitationScreen = ({ params }: Props) => {
  return (
    <div className="flex flex-col pt-16 h-full">
      <h2 className="text-5xl text-primary-base pb-2">Invite</h2>
      <Separator className="bg-secondary-base" />

      <div className="grid grid-cols-2 flex-1 text-neutral-white">
        <div className="flex flex-col pt-14">
          <div>
            <p className="text-primary-base font-semibold">table</p>

            <p className="uppercase text-secondary-base text-5xl">{"TODO"}</p>
          </div>
          <div className="flex items-end justify-between flex-1 pb-28 pr-16">
            <p className="text-secondary-base text-4xl max-w-[261px]">
              Want to join this table?
            </p>
            <JoinTableButton inviteCode={params.inviteCode} />
          </div>
        </div>
        <div className="bg-primary-base flex flex-col pt-14 md:px-8 xl:px-16">
          <div className="flex items-center gap-5">
            <Dices className="w-24 h-24" />
            <p className="text-5xl font-thin">One Word</p>
          </div>

          <div className="flex flex-col mt-20 gap-6 text-lg">
            <div className="flex items-center gap-3">
              <Pen className="w-[26px]" />
              <p>
                Write a <strong>original</strong> and{" "}
                <strong>meaningful</strong> word.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <SquareEqual className="w-[26px] inline-block mr-2" />
              <p>
                Compare all words. <strong>Drop</strong> the ones with{" "}
                <strong>similar</strong> meanings.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Dices className="w-[26px] inline-block mr-2" />
              <p>
                Make your friend <strong>guess</strong> the word.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationScreen;
