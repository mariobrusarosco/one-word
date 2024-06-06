import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Link, useParams } from "react-router-dom";

export const ActiveGameDisplay = () => {
  const { tableId } = useParams<{ tableId: string }>();

  return (
    <div data-ui="active-game-display" className="px-4 py-4">
      <div className="flex items-center gap-3">
        <Link
          to={`/tables/${tableId}/game`}
          className="flex items-center gap-2"
        >
          <Icon name="device-gamepad" className="stroke-pink-500" />
          <span className="uppercase text-lg text-pink-500">game</span>
        </Link>
      </div>
    </div>
  );
};
