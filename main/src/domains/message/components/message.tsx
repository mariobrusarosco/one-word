import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/domains/ui-system/components/ui/avatar";
import { IMessage } from "../typing/interfaces";

interface Props {
  message: IMessage;
}

const Message: React.FC<Props> = ({ message }) => {
  console.log("Message", { message });

  return (
    <li className="message p-4 shadow-main-bottom rounded-md flex items-center gap-x-3">
      <Avatar className="shadow-main-bottom">
        <AvatarImage src="" />
        <AvatarFallback className=" bg-teal-800 text-white-100">
          MB
        </AvatarFallback>
      </Avatar>

      <div className="grid gap-y-1">
        <div className="flex items-center gap-x-3 ">
          <div className="bg-pink-500 py-1 px-2 font-light text-white-100 rounded-md shadow-main-bottom">
            Mario Brusarosco
          </div>
          <div className="text-pink-500 font-normal">01/01/23 22:36</div>
        </div>
        <p className="text-teal-800 text-lg">
          Hello world Hello world Hello world Hello world Hello world{" "}
        </p>
      </div>
    </li>
  );
};

export { Message };
