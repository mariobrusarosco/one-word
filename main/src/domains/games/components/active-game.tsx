import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

export const ActiveGame = () => {
  return (
    <div className="table-active-game px-4 py-4">
      <div className="flex items-center gap-3">
        <Icon name="device-gamepad" className="stroke-pink-500" />
        <span className="uppercase text-lg text-pink-500">game</span>
      </div>
    </div>
  );
};
