import { AppLogo } from "@/domains/ui-system/components/ui/app-logo";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { iconMapper } from "@/domains/ui-system/components/ui/icon/mapper";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { WatchDemo } from "../components/modals/watch-demo";

const features = [
  {
    name: "Creating Tables",
    iconName: "square-rounded-checked",
    title:
      "Tables are common spaces where only invited members can join. Each Table will contain:",
    listItems: ["1 Game", "Multiple chat rooms"],
  },
  {
    name: "Inviting to a Table",
    iconName: "square-rounded-checked",
    title:
      "When you create a table you get to invite a friend. You’ll need to provide the email your friend has signed the App.",
  },
  {
    name: "Joinning a channel",
    iconName: "square-rounded-checked",
    title:
      "Each table will be create with a channel named “General”. Inside of it, any user read and send messages.",
  },
  {
    name: "Creating chats",
    iconName: "barrier-block",
    title:
      "Everyone inside a table can chat. But, depending on roles, a user can:",
    listItems: ["Create a Chat", "Edit chat’s name", "Delete a chat"],
  },
  {
    name: "Starting a game",
    iconName: "barrier-block",
    title:
      "If you are the ADMIN role on a table, you can wait for some friends and, start a game.",
  },
  {
    name: "Customizing a Table",
    iconName: "barrier-block",
    title: "Depending on roles, a user can:",
    listItems: [
      "Change a Table name",
      "Invite someone to participate",
      "Delete a chat",
    ],
  },
];
const IntroScren = () => {
  return (
    <div data-ui="intro-screen" className="h-dvh grid grid-cols-2 ">
      <div data-ui="project-explanation" className="p-12 bg-violet-800 xl:p-32">
        <div data-ui="heading" className="flex items-baseline gap-x-2">
          <AppLogo className="w-[96px] h-[96px] stroke-neutral-100" />
          <h1 className="text-7xl font-josefin font-light text-neutral-100">
            One Word
          </h1>
        </div>

        <p className="mt-8 grid gap-y-4 text font-thin text-neutral-100 text-lg">
          It’s a virtual board game made as side project. It's heavily based on
          “Just One” (link) - a cooperative party game in which participants
          have to play together to discover as many mystery words as possible.
        </p>

        <div className="my-14">
          <ul className="flex gap-x-12 text-neutral-100 text-lg font-thin xl:flex-col xl:gap-y-10">
            <li>
              <a
                className="flex items-center gap-x-2 hover:text-rose-800 transition-colors"
                href="https://github.com/mariobrusarosco/one-word"
                rel="noopener norefer"
                target="_blank"
              >
                <Icon name="brand-github" />
                <span>Front End</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-2 hover:text-rose-800 transition-colors"
                href="https://github.com/mariobrusarosco/api-one-word"
                rel="noopener norefer"
                target="_blank"
              >
                <Icon name="brand-github" />
                <span>Back End</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-2 hover:text-rose-800 transition-colors"
                href="https://www.figma.com/design/KZ4tq3xzzz2CvWwijUZoRy/Side-Projects?node-id=918-4431&t=va8qukkhQUuSHmDr-1"
                rel="noopener norefer"
                target="_blank"
              >
                <Icon name="brand-figma" />
                <span>Design</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex gap-x-4 items-center">
          <WatchDemo />
        </div>
      </div>

      <div
        data-ui="project-scope"
        className="px-12 pt-24 pb-10 overflow-auto bg-neutral-100 xl:p-32 xl:pt-[180px]"
      >
        <h2 className="text-violet-800 font-josefin text-5xl font-light mb-2">
          Project Scope
        </h2>
        <Separator className="bg-violet-500 mt-1 mb-2" />

        <p className="text-violet-800 text-lg font-light">
          This project is a{" "}
          <strong className="text-violet-800">Work In Progress</strong>, so
          below you'll find a list with the full scope plus a progress indicator
          for each feature.{" "}
        </p>

        <h3 className="mt-16 text-violet-800 font-josefin text-5xl font-light">
          Features
        </h3>

        <Separator className="bg-violet-500 mt-1 mb-12" />

        {features.map((feature) => (
          <div key={feature.name} className="mb-10">
            <div className="flex gap-x-1 align-center">
              <h3 className="leading-8 text-3xl font-semibold font-josefin text-violet-800 lowercase">
                {feature.name}
              </h3>
              <Icon
                name={feature.iconName as keyof typeof iconMapper}
                size="medium"
                className="text-rose-800 stroke-width-1"
                stroke={1}
              />
            </div>
            <p className="text-violet-800 text-lg font-light mb-6">
              {feature.title}
            </p>

            {feature.listItems && (
              <ul className="text-violet-800 text-sm font-semibold list-disc px-5 uppercase flex flex-col gap-y-2">
                {feature.listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroScren;
