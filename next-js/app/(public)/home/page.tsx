"use client";
import { useEffect } from "react";
import { setScrolledValue } from "./helper";
import { Separator } from "@/domains/shared/components/ui/separator";

const LandingScreen = () => {
  useEffect(() => {
    window.addEventListener("scroll", setScrolledValue);
    window.addEventListener("resize", setScrolledValue);

    return () => {
      window.removeEventListener("scroll", setScrolledValue);
      window.removeEventListener("resize", setScrolledValue);
    };
  }, []);

  return (
    <div className="home px-8 pt-[147px]">
      <section>
        <div className="flex justify-end">
          <h1 className="text-neutral-white text-9xl mr-10">One Word</h1>
        </div>

        <div className="flex gap-3 text-neutral-white max-w-[500px] mt-[80px] mb-12">
          <p className="text-lg">lorem ipsum</p>
          <Separator orientation="vertical" />
          <p className="text-md max-w-[261px]">
            lorem ipsum lorem ipsum lorem ipsum.
          </p>
        </div>

        <div className="flex gap-3 text-neutral-white max-w-[500px] ">
          <p className="text-lg">lorem ipsum</p>
          <Separator orientation="vertical" />
          <p className="text-md max-w-[261px]">
            lorem ipsum lorem ipsum lorem ipsum.
          </p>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default LandingScreen;
