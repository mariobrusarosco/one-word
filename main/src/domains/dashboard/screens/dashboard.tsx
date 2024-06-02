import { Button } from "@/domains/ui-system/components/ui/button";
import { NavLink } from "react-router-dom";

const DashboardScreen = () => {
  return (
    <div className="h-full ">
      <h2 className="heading text-6xl font-serif text-white-100">Dashboard</h2>

      <section className="welcom-section pt-8 text-white-100">
        <p className="font-sans text-md mb-8">
          It seems you haven’t joined at least one table!
        </p>
        <p className="font-sans text-3xl ">Let's get started</p>
      </section>

      <section className="flex flex-col gap-y-4 steps-sections mt-4 text-white-100">
        <div className="step-1 flex items-center gap-x-4 rounded-lg  bg-pink-500 dark:bg-teal-800 p-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full border  border-white-100 text-xs">
            <span>1</span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <p className="font-serif text-xs font-semibold">Create a table</p>
            <p className="text-sm font-sans">
              So you can invite some friends to join you. Tables are places to
              chat and play!
            </p>
          </div>
        </div>

        <div className="step-2 flex items-center gap-x-4 rounded-lg  bg-pink-500 dark:bg-teal-800 p-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full border  border-white-100 text-xs">
            <span>2</span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <p className="font-serif text-xs font-semibold">Create Channels</p>
            <p className="text-sm font-sans">
              Every member of a table can join channels and start chating!
            </p>
          </div>
        </div>

        <div className="step-3 flex items-center gap-x-4 rounded-lg  bg-pink-500 dark:bg-teal-800 p-3">
          <div className="flex items-center justify-center w-6 h-6 rounded-full border  border-white-100 text-xs">
            <span>3</span>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <p className="font-serif text-xs font-semibold">Create a game</p>
            <p className="text-sm font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate est mollitia aliquid acc
            </p>
          </div>
        </div>

        <Button variant="secondary" size="large">
          <NavLink to="/tables">Start</NavLink>
        </Button>
      </section>
    </div>
  );
};

export default DashboardScreen;
