import { ScreenHeading } from "@/domains/shared/components/screen-heading";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";

const NoSelectedTable = () => {
  return (
    <div data-ui="no-selected-table-screen" className="p-12 xl:p-20 col-[1/-1]">
      <ScreenHeading title="No donuts for you" />

      <ul className="text-violet-800 dark:text-neutral-100 text-xl flex flex-col gap-y-6 pt-6">
        <li className="flex gap-x-4">
          <Button variant="primary" size="extra-small" roundness="tiny">
            <Icon size="extra-small" name="device-gamepad" />
          </Button>
          <p>
            You can join a table, if you were already invited to it, on the
            navbar.
          </p>
        </li>

        <li className="flex gap-x-4">
          <Button variant="primary" size="extra-small" roundness="tiny">
            <Icon size="extra-small" name="shield" />
          </Button>
          <p>
            If you are not invited to a table, ask a friend to invite you. Share
            the email you’ve signed up. When all set, reload the app and, select
            the Table.
          </p>
        </li>

        <li className="flex gap-x-4">
          <Button variant="primary" size="extra-small" roundness="tiny">
            <Icon size="extra-small" name="plus" />
          </Button>
          <p>Or you can create a new table on the navbar and, invite friends</p>
        </li>
      </ul>
    </div>
  );
};

export default NoSelectedTable;
