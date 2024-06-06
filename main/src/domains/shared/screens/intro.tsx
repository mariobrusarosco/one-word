import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Link } from "react-router-dom";

const IntroScren = () => {
  return (
    <div data-ui="intro-screen" className="h-dvh grid grid-cols-2">
      <div
        data-ui="project-explanation"
        className="bg-pink-500 text-white-100 px-12 py-20"
      >
        <div data-ui="heading" className="flex items-center gap-x-4">
          <Icon name="device-gamepad" className="w-[96px] h-[96px]" />
          <h1 className="text-6xl font-serif">One Word</h1>
        </div>

        <div className="mt-16 grid gap-y-10 text-2xl font-sans font-light">
          <p className="">
            It’s a virtual board game made as side project. It's heavily based
            on “Just One” (link) - a cooperative party game in which
            participants have to play together to discover as many mystery words
            as possible.
          </p>
          <p>
            They need to find the best clue to help a teammate, while being
            unique, as all identical clues will be cancelled!
          </p>
        </div>

        <div className="mt-16">
          <ul className="text-2xl grid gap-y-10">
            <li className="flex gap-x-4 items-center">
              <Icon name="device-gamepad" size="large" />
              <p>
                The <strong>Front End</strong> is under development
                <Button variant="link" className="ml-4">
                  here
                </Button>
              </p>
            </li>
            <li className="flex gap-x-4 items-center">
              <Icon name="device-gamepad" size="large" />
              <p>
                The <strong>Back End</strong> is under development
                <Button variant="link" className="ml-4">
                  here
                </Button>
              </p>
            </li>
            <li className="flex gap-x-4 items-center">
              <Icon name="device-gamepad" size="large" />
              <p>
                The <strong>Design</strong> is under development
                <Button variant="link" className="ml-4">
                  here
                </Button>
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-16 flex gap-x-4 items-center">
          <p className="text-2xl">
            You can check the MVP of the game by clicking
          </p>
          <Button
            asChild
            variant="secondary"
            className="bg-white-100 text-pink-500 text-xl font-semibold"
          >
            <Link to="/login" className="flex">
              here
            </Link>
          </Button>
        </div>

        <div className="mt-10 flex gap-x-4 items-center">
          <p className="text-2xl">You can watch the latest demo</p>
          <Button
            asChild
            variant="secondary"
            className="bg-white-100 text-pink-500 text-xl font-semibold"
          >
            <Link to="/login" className="flex">
              here
            </Link>
          </Button>
        </div>
      </div>

      <div data-ui="project-scope" className="bg-white-100 px-12 py-20">
        <h2 className="text-pink-500 font-serif text-5xl font-thin mb-10">
          Project Scope
        </h2>

        <div className="mb-8">
          <h3 className="text-3xl text-teal-800 font-bold mb-2 lowercase">
            Creating Private Tables
          </h3>
          <p className="text-teal-800 text-xl font-light mb-2">
            To play the game, participants have to create private tables aka
            waiting rooms. Each table can have:
          </p>
          <ul className="text-pink-500 text-xl font-light list-disc px-5">
            <li>1 Game</li>
            <li>Multiple chat rooms</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl text-teal-800 font-bold mb-2 lowercase">
            Inviting someone to a Table
          </h3>
          <p className="text-teal-800 text-xl font-light mb-2">
            If you are a table’s creator, you can invitation a friend. You'll
            need to provide the email which that friend has signed on the game.
            After confirming the invite,{" "}
            <span className="text-pink-500">that table will be visible!</span>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl text-teal-800 font-bold mb-2 lowercase">
            Creating Chats
          </h3>
          <p className="text-teal-800 text-xl font-light mb-2">
            Everyone inside a table can chat. Currently the supported functions
            are:
          </p>
          <ul className="text-pink-500 text-xl font-light list-disc px-5">
            <li>Create a Chat</li>
            <li>Edit chat’s name</li>
            <li>Delete a chat</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl text-teal-800 font-bold mb-2 lowercase">
            Starting a Game
          </h3>
          <p className="text-teal-800 text-xl font-light mb-2">
            If uou are a admin of a table, you’ll be able to start a game. Just
            wait for participants to join (currently, there’s no max. of
            participants) and when you are ready, you can start the game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroScren;
