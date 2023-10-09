"use client";
import { Button } from "@/domains/shared/components/ui/button";
import { Separator } from "@/domains/shared/components/ui/separator";

const ComponentsScreen = () => {
  return (
    <div className="px-8 pt-[147px]">
      <section>
        <h2>Button</h2>

        <div className="flex gap-5 mt-7 group wrapper">
          <Button size="sm" className="group-[.wrapper]:self-end">
            create
          </Button>
          <Button size="md" className="group-[.wrapper]:self-end">
            create
          </Button>
          <Button size="lg" className="group-[.wrapper]:self-end">
            create
          </Button>
        </div>

        <div className="flex gap-5 mt-7 group wrapper">
          <Button
            size="sm"
            variant="secondary"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
          <Button
            size="md"
            variant="secondary"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
        </div>

        <div className="flex gap-5 mt-7 group wrapper">
          <Button
            size="sm"
            variant="danger"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
          <Button
            size="md"
            variant="danger"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
          <Button
            size="lg"
            variant="danger"
            className="group-[.wrapper]:self-end"
          >
            create
          </Button>
        </div>

        <div className="flex gap-5 mt-7 group wrapper">
          <Button
            size="sm"
            variant="outline"
            className="group-[.wrapper]:self-end border-primary-base text-primary-base"
          >
            create
          </Button>
          <Button
            size="md"
            variant="outline"
            className="group-[.wrapper]:self-end border-primary-base text-primary-base"
          >
            create
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group-[.wrapper]:self-end border-primary-base text-primary-base"
          >
            create
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComponentsScreen;
