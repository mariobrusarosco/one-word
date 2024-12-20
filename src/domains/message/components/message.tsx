import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/domains/ui-system/components/ui/avatar";
import { IMessage } from "../typing/interfaces";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";

interface Props {
  message: IMessage;
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <li className="message p-3 shadow-main-bottom rounded-md flex items-center gap-x-3">
      <Avatar className="shadow-main-bottom">
        <AvatarImage src="" />
        <AvatarFallback className=" bg-rose-800 text-neutral-100">
          {getInitials(message.memberNickname || "")}
        </AvatarFallback>
      </Avatar>

      <div className="grid gap-y-1">
        <div className="flex items-center gap-x-3 ">
          <div className="bg-rose-800 py-1 px-2 font-light text-neutral-100 rounded-md shadow-main-bottom text-xs">
            {message.memberNickname}
          </div>
          <div className="text-rose-800 dark:text-neutral-100 text-xs">
            {new Date(message.createdAt).toLocaleDateString()}{" "}
            {new Date(message.createdAt).toLocaleTimeString()}
          </div>
        </div>
        <p className="text-violet-800 dark:text-neutral-100 text-sm">
          {message.content}
        </p>
      </div>
    </li>
  );
};

export { Message };
